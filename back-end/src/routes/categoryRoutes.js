import { Router } from 'express';
const router = Router();
import categoryController from '../controllers/categoryController'

router.get('/', categoryController.getAllCategories )
router.post('/', categoryController.createCategory)
router.put('/id=:id', categoryController.updateCategory)
router.delete('/id=:id', categoryController.deleteCategory)
router.get('/id=:id', categoryController.getCategoryById)

export default router;