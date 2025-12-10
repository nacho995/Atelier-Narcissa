import { Router } from 'express';
import { login, me } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';
import { loginValidation } from '../utils/validators.js';

const router = Router();

router.post('/login', loginValidation, login);
router.get('/me', authMiddleware, me);

export default router;

