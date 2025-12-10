import { body, query } from 'express-validator';

export const PAYMENT_METHODS = ['bizum', 'tarjeta', 'transferencia', 'efectivo'];
export const ONLINE_PAYMENT_METHODS = ['bizum', 'tarjeta', 'transferencia'];

export const loginValidation = [
  body('email').isEmail().withMessage('Email inválido'),
  body('password').notEmpty().withMessage('Contraseña requerida')
];

export const incomeValidation = [
  body('amount').isFloat({ min: 0.01 }).withMessage('Importe inválido'),
  body('paymentMethod').isIn(PAYMENT_METHODS).withMessage('Método de pago inválido'),
  body('concept').notEmpty().withMessage('Concepto requerido'),
  body('notes').optional().isString()
];

export const webhookPaymentValidation = [
  body('amount').isFloat({ min: 0.01 }).withMessage('Importe inválido'),
  body('paymentMethod').isIn(ONLINE_PAYMENT_METHODS).withMessage('Método de pago no permitido'),
  body('concept').notEmpty().withMessage('Concepto requerido')
];

export const expenseValidation = [
  body('amount').isFloat({ min: 0.01 }).withMessage('Importe inválido'),
  body('category').notEmpty().withMessage('Categoría requerida'),
  body('notes').optional().isString()
];

export const dateRangeValidation = [
  query('startDate').optional().isISO8601(),
  query('endDate').optional().isISO8601()
];

