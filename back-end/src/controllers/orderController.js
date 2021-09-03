const Pedidos = require('../server/models/Pedidos');

class OrderController{

    static async getAllOrders(req, res){

        Pedidos.findAll().then(orders => {
            res.json(orders);
        }).catch(error => {
            res.json(error)
        })
        
    }

    static async createOrder(req, res){
        const newOrder = req.body;
        Pedidos.create(newOrder).then(order => {
            res.json({
                message: "The order has been created",
                data: order
            })
        }).catch(error => {
            res.json({
                message: "The order has not been created",
                data: error
            })
        })
    }

    static async updateOrder(req, res){
        const id = req.params.id;
        const changeOrder = req.body;
        const existOrder = await Pedidos.findOne({
            where: { id_pedido: Number(id) }
        })

        if(existOrder){
            Pedidos.update(changeOrder, {where:{ id_pedido: Number(id)}}).then(order => {
                res.json({
                    message: "The order has been changed",
                    data: changeOrder
                })
            }).catch(error => {
                res.json({
                    message: "The order has not been changed",
                    data: error
                })
            })
        }else{
            res.json("The order id does not exist")
        }
    }

    static async deleteOrder(req, res){
        const id = req.params.id;
        const existOrder = await Pedidos.findOne({
            where: { id_pedido: Number(id) }
        })

        if(existOrder){
            Pedidos.destroy({where:{ id_pedido: Number(id)}}).then(order => {
                res.json("The order has been deleted")
            }).catch(error => {
                res.json({
                    message: "The order has not been deleted",
                    data: error
                })
            })
        }else{
            res.json("The order id does not exist")
        }        
    }

    static async getOrderById(req, res){
        const id = req.params.id;
        Pedidos.findOne( {where: { id_pedido: Number(id)}} ).then(order => {
            if(order != null){
                res.json(order)
            }else{
                res.json("order id does not exist")
            }
        }).catch(error => {
            res.json(error)
        })
    }

}
export default OrderController;