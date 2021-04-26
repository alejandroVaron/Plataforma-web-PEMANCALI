import { Router } from 'express';
const router = Router();
import ProductController from '../controllers/productController'

router.get('/', ProductController.getAllProducts)
router.post('/', ProductController.createProduct)
router.put('/id=:id', ProductController.updateProduct)
router.delete('/id=:id', ProductController.deleteProduct)
router.get('/id=:id', ProductController.getProductById)

export default router;