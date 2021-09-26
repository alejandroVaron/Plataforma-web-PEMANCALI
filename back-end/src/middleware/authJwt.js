import jwt from 'jsonwebtoken'
import config from '../server/config/config.js'


module.exports = (req, res, next) => {

    console.log(req.headers)

    if (!req.headers.authorization) {
        return res.status(403).send({
        message: "No token provided!"
        });
    };
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, config.llave, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                message: "Token decoding error"
            });
        }else{
            next();
        }
    });

 };
    

