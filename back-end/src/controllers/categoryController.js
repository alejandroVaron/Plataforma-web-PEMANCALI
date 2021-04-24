const Categorias = require('../server/models/Categorias')

class CategoryController{

    static async getAllCategories(req, res){

        Categorias.findAll().then(category => {
            res.json(category);
        }).catch(error => {
            res.json(category)
        })
        
    }

    static async createCategory(req, res){
        const newCategory = req.body;
        Categorias.create(newCategory).then(category => {
            res.json({
                message: "The category has been created",
                data: category
            })
        }).catch(error => {
            res.json({
                message: "The category has not been created",
                data: error
            })
        })
    }

    static async updateCategory(req, res){
        const id = req.params.id;
        const changeCategory = req.body;
        const existCategory = await Categorias.findOne({
            where: { id_categoria: Number(id) }
        })

        if(existCategory){
            Categorias.update(changeCategory, {where:{ id_categoria: Number(id)}}).then(category => {
                res.json({
                    message: "The category has been changed",
                    data: changeCategory
                })
            }).catch(error => {
                res.json({
                    message: "The category has not been changed",
                    data: error
                })
            })
        }else{
            res.json("The category id does not exist")
        }
    }

    static async deleteCategory(req, res){
        const id = req.params.id;
        const changeCategory = req.body;
        const existCategory = await Categorias.findOne({
            where: { id_categoria: Number(id) }
        })

        if(existCategory){
            Categorias.destroy({where:{ id_categoria: Number(id)}}).then(category => {
                res.json("The category has been deleted")
            }).catch(error => {
                res.json({
                    message: "The category id does not exist",
                    data: error
                })
            })
        }else{
            res.json("The category id does not exist")
        }        
    }

    static async getCategoryById(req, res){
        const id = req.params.id;
        Categorias.findOne( {where: { id_categoria: Number(id)}} ).then(category => {
            if(category != null){
                res.json(category)
            }else{
                res.json("category id does not exist")
            }
        }).catch(error => {
            res.json(error)
        })
    }

}
export default CategoryController