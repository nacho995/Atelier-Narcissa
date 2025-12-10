import { validationResult } from 'express-validator';
import { prisma } from '../utils/db.js';

export const registerPayment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { amount, paymentMethod, concept, notes } = req.body;

  try {
    const income = await prisma.income.create({
      data: {
        amount,
        paymentMethod,
        concept,
        notes: notes || 'Pago recibido desde web',
        isAutomatic: true
      }
    });

    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar pago' });
  }
};

