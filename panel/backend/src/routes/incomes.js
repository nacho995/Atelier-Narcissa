import { Router } from 'express';
import {
  createIncome,
  getIncomes,
  getIncomeSummary,
  updateIncome,
  deleteIncome
} from '../controllers/incomeController.js';
import { authMiddleware } from '../middleware/auth.js';
import { incomeValidation, dateRangeValidation } from '../utils/validators.js';

const router = Router();

router.use(authMiddleware);

router.get('/', dateRangeValidation, getIncomes);
router.get('/summary', dateRangeValidation, getIncomeSummary);
router.post('/', incomeValidation, createIncome);
router.put('/:id', incomeValidation, updateIncome);
router.delete('/:id', deleteIncome);

export default router;

