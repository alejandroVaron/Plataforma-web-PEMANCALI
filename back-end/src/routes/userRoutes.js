import { Router } from 'express';
const router = Router();
import UserController from '../controllers/userController'

router.get('/', UserController.getAllUsers )
router.post('/', UserController.createUser)
router.put('/id=:id', UserController.updateUser)
router.delete('/id=:id', UserController.deleteUser)
router.get('/id=:id', UserController.getUserById)
router.get('/email=:email', UserController.getUserByEmail)

export default router;