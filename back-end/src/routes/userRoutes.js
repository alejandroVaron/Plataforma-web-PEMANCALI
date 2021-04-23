import { Router } from 'express';
const router = Router();
import UserController from '../controllers/userController'

router.get('/', UserController );

export default router;