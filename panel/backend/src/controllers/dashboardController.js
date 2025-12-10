import { prisma } from '../utils/db.js';

export const getDashboard = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const where = {};
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate + 'T23:59:59');
    }

    const [incomes, expenses] = await Promise.all([
      prisma.income.findMany({ where }),
      prisma.expense.findMany({ where })
    ]);

    const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
    const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
    const profit = totalIncome - totalExpense;

    const incomeByMethod = incomes.reduce((acc, i) => {
      acc[i.paymentMethod] = (acc[i.paymentMethod] || 0) + i.amount;
      return acc;
    }, {});

    const expenseByCategory = expenses.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount;
      return acc;
    }, {});

    res.json({
      totalIncome,
      totalExpense,
      profit,
      incomeByMethod,
      expenseByCategory,
      incomeCount: incomes.length,
      expenseCount: expenses.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener dashboard' });
  }
};

export const getChartData = async (req, res) => {
  const { startDate, endDate, groupBy = 'day' } = req.query;

  try {
    const where = {};
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate + 'T23:59:59');
    }

    const [incomes, expenses] = await Promise.all([
      prisma.income.findMany({ where, orderBy: { createdAt: 'asc' } }),
      prisma.expense.findMany({ where, orderBy: { createdAt: 'asc' } })
    ]);

    const groupFn = (date) => {
      const d = new Date(date);
      if (groupBy === 'month') {
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      }
      if (groupBy === 'week') {
        // Agrupar por semana del año (no del mes)
        const startOfYear = new Date(d.getFullYear(), 0, 1);
        const days = Math.floor((d - startOfYear) / (24 * 60 * 60 * 1000));
        const weekNum = Math.ceil((days + startOfYear.getDay() + 1) / 7);
        return `${d.getFullYear()}-W${String(weekNum).padStart(2, '0')}`;
      }
      // Por día - formato legible
      return d.toISOString().split('T')[0];
    };

    const incomeOverTime = incomes.reduce((acc, i) => {
      const key = groupFn(i.createdAt);
      acc[key] = (acc[key] || 0) + i.amount;
      return acc;
    }, {});

    const expenseOverTime = expenses.reduce((acc, e) => {
      const key = groupFn(e.createdAt);
      acc[key] = (acc[key] || 0) + e.amount;
      return acc;
    }, {});

    // Contar operaciones por período
    const incomeCountByPeriod = incomes.reduce((acc, i) => {
      const key = groupFn(i.createdAt);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const expenseCountByPeriod = expenses.reduce((acc, e) => {
      const key = groupFn(e.createdAt);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    res.json({ 
      incomeOverTime, 
      expenseOverTime,
      incomeCountByPeriod,
      expenseCountByPeriod
    });
  } catch (error) {
    console.error('Chart data error:', error);
    res.status(500).json({ error: 'Error al obtener datos del gráfico' });
  }
};
