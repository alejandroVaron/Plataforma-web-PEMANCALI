const Usuarios = require('../server/models/Usuarios')
const authConfig = require('../server/config/auth')
const jwt = require('jsonwebtoken')
module.exports = {
    signIn(req, res){
        let {email_usuario, contraseña_usuario} = req.body

        Usuarios.findOne({
            where: {
                email_usuario: email_usuario
            }
        }).then(usuario =>{
            if(!usuario){
                res.status(400).json({msg: "User not found"})
            }else{
                if(usuario.contraseña_usuario == contraseña_usuario){
                    let token = jwt.sign({user: usuario}, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    res.json({
                        user: usuario,
                        token: token
                    })
                }else{
                    res.status(401).json({msg: "Unauthorized access:  Account incorrect"})
                }
            }
        }).catch(err => {
            res.status(500).json(err)
        });
    },

    signUp(req, res){
        Usuarios.findOne({
            where: {
                email_usuario: req.body.email_usuario
            }
          }).then(user => {
            if (user) {
              res.status(400).send({
                message: "Failed! Email is already in use!"
              });
              return;
            }
        });

        Usuarios.create({
            email_usuario: req.body.email_usuario,
            contraseña_usuario: req.body.contraseña_usuario,
            nombre_usuario: req.body.nombre_usuario,
            apellido_usuario: req.body.apellido_usuario,
            celular_usuario: req.body.celular_usuario,
            rol_usuario: req.body.rol_usuario
            
        }).then(usuario =>{
            let token = jwt.sign({user: usuario}, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                user: usuario,
                token: token
            })
        }).catch(err => {
            res.status(500).json(err)
        });
    }
};