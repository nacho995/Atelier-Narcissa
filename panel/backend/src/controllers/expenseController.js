import { validationResult } from 'express-validator';
import { prisma } from '../utils/db.js';

export const createExpense = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { amount, category, notes, date } = req.body;

  try {
    const expense = await prisma.expense.create({
      data: { 
        amount, 
        category, 
        notes,
        createdAt: date ? new Date(date + 'T12:00:00') : new Date()
      }
    });
    res.status(201).json(expense);
  } catch (error) {
    console.error('Error creating expense:', error);
    res.status(500).json({ error: 'Error al crear gasto' });
  }
};

export const getExpenses = async (req, res) => {
  const { startDate, endDate, category, page = 1, limit = 20 } = req.query;

  try {
    const where = {};
    
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate + 'T23:59:59');
    }
    
    if (category) where.category = category;

    const [data, total] = await Promise.all([
      prisma.expense.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: parseInt(limit)
      }),
      prisma.expense.count({ where })
    ]);

    res.json({ data, total, page: parseInt(page), limit: parseInt(limit) });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener gastos' });
  }
};

export const getExpenseSummary = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const where = {};
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate + 'T23:59:59');
    }

    const expenses = await prisma.expense.findMany({ where });
    
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const byCategory = expenses.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount;
      return acc;
    }, {});

    res.json({ total, byCategory, count: expenses.length });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener resumen' });
  }
};

export const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { amount, category, notes, date } = req.body;

  try {
    const data = { amount, category, notes };
    if (date) data.createdAt = new Date(date + 'T12:00:00');
    
    const expense = await prisma.expense.update({
      where: { id: parseInt(id) },
      data
    });
    res.json(expense);
  } catch (error) {
    res.status(404).json({ error: 'Gasto no encontrado' });
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.expense.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Gasto eliminado' });
  } catch (error) {
    res.status(404).json({ error: 'Gasto no encontrado' });
  }
};
