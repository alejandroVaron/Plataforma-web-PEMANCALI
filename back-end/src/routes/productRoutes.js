import { Router } from 'express';
const router = Router();
import ProductController from '../controllers/productController'
import auth from '../middleware/authJwt'


router.get('/', ProductController.getAllProducts)
router.post('/', auth, ProductController.createProduct)
router.put('/id=:id', auth, ProductController.updateProduct)
router.delete('/id=:id', auth, ProductController.deleteProduct)
router.get('/id=:id', ProductController.getProductById)
router.get('/category=:id', ProductController.getProductByCategory)
export default router;