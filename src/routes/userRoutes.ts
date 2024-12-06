import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

router.get('/users/:email', UserController.getUserByEmail);

export default router;
