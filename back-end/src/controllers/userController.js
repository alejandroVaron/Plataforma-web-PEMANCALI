const Usuarios = require('../server/models/Usuarios')

class UserController{

    static async getAllUsers(req, res){

        Usuarios.findAll().then(users => {
            res.json(users);
        }).catch(error => {
            res.json(error)
        })
        
    }

    static async createUser(req, res){
        const newUser = req.body;
        Usuarios.create(newUser).then(user => {
            res.json({
                message: "The user has been created",
                data: user
            })
        }).catch(error => {
            res.json({
                message: "The user has not been created",
                data: error
            })
        })
    }

    static async updateUser(req, res){
        const id = req.params.id;
        const changeUser = req.body;
        const existUser = await Usuarios.findOne({
            where: { id_usuario: Number(id) }
        })

        if(existUser){
            Usuarios.update(changeUser, {where:{ id_usuario: Number(id)}}).then(user => {
                res.json({
                    message: "The user has been changed",
                    data: changeUser
                })
            }).catch(error => {
                res.json({
                    message: "The user has not been changed",
                    data: error
                })
            })
        }else{
            res.json("The user id does not exist")
        }
    }

    static async deleteUser(req, res){
        const id = req.params.id;
        const existUser = await Usuarios.findOne({
            where: { id_usuario: Number(id) }
        })

        if(existUser){
            Usuarios.destroy({where:{ id_usuario: Number(id)}}).then(user => {
                res.json("The user has been deleted")
            }).catch(error => {
                res.json({
                    message: "The user has not been deleted",
                    data: error
                })
            })
        }else{
            res.json("The user id does not exist")
        }        
    }

    static async getUserById(req, res){
        const id = req.params.id;
        Usuarios.findOne( {where: { id_usuario: Number(id)}} ).then(user => {
            if(user != null){
                res.json(user)
            }else{
                res.json("User id does not exist")
            }
        }).catch(error => {
            res.json(error)
        })
    }

    static async getUserByEmail(req, res){
        const email = req.params.email;
        Usuarios.findOne( {where: { email_usuario: email}} ).then(user => {
            if(user != null){
                res.json(user)
            }else{
                res.json("User id does not exist")
            }
        }).catch(error => {
            res.json(error)
        })
    }
    
}
export default UserController