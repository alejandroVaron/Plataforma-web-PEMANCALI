import UserController from './userController';

const Productos = require('../server/models/Productos');

class ProductController{

    static async getAllProducts(req, res){

        Productos.findAll().then(products => {
            res.json(products);
        }).catch(error => {
            res.json(error)
        })
        
    }

    static async createProduct(req, res){
        const newProduct = req.body;
        Productos.create(newProduct).then(product => {
            res.json({
                message: "The product has been created",
                data: product
            })
        }).catch(error => {
            res.json({
                message: "The product has not been created",
                data: error
            })
        })
    }

    static async updateProduct(req, res){
        const id = req.params.id;
        const changeProduct = req.body;
        const existProduct = await Productos.findOne({
            where: { id_producto: Number(id) }
        })

        if(existProduct){
            Productos.update(changeProduct, {where:{ id_producto: Number(id)}}).then(product => {
                res.json({
                    message: "The product has been changed",
                    data: changeProduct
                })
            }).catch(error => {
                res.json({
                    message: "The product has not been changed",
                    data: error
                })
            })
        }else{
            res.json("The product id does not exist")
        }
    }

    static async deleteProduct(req, res){
        const id = req.params.id;
        const existProduct = await Productos.findOne({
            where: { id_producto: Number(id) }
        })

        if(existProduct){
            Productos.destroy({where:{ id_producto: Number(id)}}).then(product => {
                res.json("The product has been deleted")
            }).catch(error => {
                res.json({
                    message: "The product has not been deleted",
                    data: error
                })
            })
        }else{
            res.json("The product id does not exist")
        }        
    }

    static async getProductById(req, res){
        const id = req.params.id;
        Productos.findOne( {where: { id_producto: Number(id)}} ).then(product => {
            if(product != null){
                res.json(product)
            }else{
                res.json("product id does not exist")
            }
        }).catch(error => {
            res.json(error)
        })
    }

    static async getProductByCategory(req, res){
        const id = req.params.id;
        Productos.findAll( {where: { id_categoria: Number(id)}} ).then(product => {
            if(product != null){
                res.json(product)
            }else{
                res.json("product id does not exist")
            }
        }).catch(error => {
            res.json(error)
        })
    }

}
export default ProductController;