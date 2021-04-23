const {Usuarios} = require('../models/Usuarios')
class UserController{

    static async getAllUsers(req, res){
        try{
            const users = await Usuarios.find()
            res.json({
                message: 'Entré aquí',
                data: users
            })
        }catch(error){

        }
    }

}
export default UserController