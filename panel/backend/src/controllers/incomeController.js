import { validationResult } from 'express-validator';
import { prisma } from '../utils/db.js';

export const createIncome = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { amount, paymentMethod, concept, notes, date } = req.body;

  try {
    const income = await prisma.income.create({
      data: { 
        amount, 
        paymentMethod, 
        concept, 
        notes, 
        isAutomatic: false,
        createdAt: date ? new Date(date + 'T12:00:00') : new Date()
      }
    });
    res.status(201).json(income);
  } catch (error) {
    console.error('Error creating income:', error);
    res.status(500).json({ error: 'Error al crear ingreso' });
  }
};

export const getIncomes = async (req, res) => {
  const { startDate, endDate, paymentMethod, page = 1, limit = 20 } = req.query;

  try {
    const where = {};
    
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate + 'T23:59:59');
    }
    
    if (paymentMethod) where.paymentMethod = paymentMethod;

    const [data, total] = await Promise.all([
      prisma.income.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: parseInt(limit)
      }),
      prisma.income.count({ where })
    ]);

    res.json({ data, total, page: parseInt(page), limit: parseInt(limit) });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ingresos' });
  }
};

export const getIncomeSummary = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const where = {};
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate + 'T23:59:59');
    }

    const incomes = await prisma.income.findMany({ where });
    
    const total = incomes.reduce((sum, i) => sum + i.amount, 0);
    const byPaymentMethod = incomes.reduce((acc, i) => {
      acc[i.paymentMethod] = (acc[i.paymentMethod] || 0) + i.amount;
      return acc;
    }, {});

    res.json({ total, byPaymentMethod, count: incomes.length });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener resumen' });
  }
};

export const updateIncome = async (req, res) => {
  const { id } = req.params;
  const { amount, paymentMethod, concept, notes, date } = req.body;

  try {
    const data = { amount, paymentMethod, concept, notes };
    if (date) data.createdAt = new Date(date + 'T12:00:00');
    
    const income = await prisma.income.update({
      where: { id: parseInt(id) },
      data
    });
    res.json(income);
  } catch (error) {
    res.status(404).json({ error: 'Ingreso no encontrado' });
  }
};

export const deleteIncome = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.income.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Ingreso eliminado' });
  } catch (error) {
    res.status(404).json({ error: 'Ingreso no encontrado' });
  }
};
