import { Router } from 'express';
import { getDashboard, getChartData } from '../controllers/dashboardController.js';
import { authMiddleware } from '../middleware/auth.js';
import { dateRangeValidation } from '../utils/validators.js';

const router = Router();

router.use(authMiddleware);

router.get('/', dateRangeValidation, getDashboard);
router.get('/chart-data', dateRangeValidation, getChartData);

export default router;

