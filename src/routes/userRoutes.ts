import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

router.get('/:email', UserController.getUserByEmail);

export default router;
