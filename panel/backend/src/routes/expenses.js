import { Router } from 'express';
import {
  createExpense,
  getExpenses,
  getExpenseSummary,
  updateExpense,
  deleteExpense
} from '../controllers/expenseController.js';
import { authMiddleware } from '../middleware/auth.js';
import { expenseValidation, dateRangeValidation } from '../utils/validators.js';

const router = Router();

router.use(authMiddleware);

router.get('/', dateRangeValidation, getExpenses);
router.get('/summary', dateRangeValidation, getExpenseSummary);
router.post('/', expenseValidation, createExpense);
router.put('/:id', expenseValidation, updateExpense);
router.delete('/:id', deleteExpense);

export default router;

