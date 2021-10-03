import { Router } from 'express';
const router = Router();
import categoryController from '../controllers/categoryController'
import auth from '../middleware/authJwt'

router.get('/', categoryController.getAllCategories )
router.post('/', auth, categoryController.createCategory)
router.put('/id=:id', auth, categoryController.updateCategory)
router.delete('/id=:id', auth, categoryController.deleteCategory)
router.get('/id=:id', categoryController.getCategoryById)

export default router;