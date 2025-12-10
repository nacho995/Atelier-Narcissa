import { Router } from 'express';
import { registerPayment } from '../controllers/webhookController.js';
import { apiKeyMiddleware } from '../middleware/auth.js';
import { webhookPaymentValidation } from '../utils/validators.js';

const router = Router();

router.post('/payment', apiKeyMiddleware, webhookPaymentValidation, registerPayment);

export default router;

