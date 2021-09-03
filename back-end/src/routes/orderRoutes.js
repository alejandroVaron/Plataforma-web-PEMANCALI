import { Router } from 'express';
const router = Router();
import OrderController from '../controllers/orderController'

router.get('/', OrderController.getAllOrders)
router.post('/', OrderController.createOrder)
router.put('/id=:id', OrderController.updateOrder)
router.delete('/id=:id', OrderController.deleteOrder)
router.get('/id=:id', OrderController.getOrderById)

export default router;