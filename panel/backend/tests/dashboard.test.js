import request from 'supertest';
import bcrypt from 'bcryptjs';
import { app } from '../src/index.js';
import { prisma } from '../src/utils/db.js';

let authToken;

describe('Dashboard API', () => {
  beforeAll(async () => {
    await prisma.$connect();
    
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    await prisma.user.upsert({
      where: { email: 'narcisa@test.com' },
      update: {},
      create: {
        email: 'narcisa@test.com',
        password: hashedPassword,
        name: 'Narcisa'
      }
    });

    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: 'narcisa@test.com', password: 'password123' });
    
    authToken = loginRes.body.token;

    // Crear datos de prueba
    await prisma.income.createMany({
      data: [
        { amount: 1000, paymentMethod: 'tarjeta', concept: 'Vestido 1' },
        { amount: 500, paymentMethod: 'bizum', concept: 'Arreglo' }
      ]
    });

    await prisma.expense.createMany({
      data: [
        { amount: 200, category: 'telas' },
        { amount: 100, category: 'alquiler' }
      ]
    });
  });

  afterAll(async () => {
    await prisma.income.deleteMany();
    await prisma.expense.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  describe('GET /api/dashboard', () => {
    it('should return complete summary', async () => {
      const res = await request(app)
        .get('/api/dashboard')
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
      expect(res.body.totalIncome).toBeDefined();
      expect(res.body.totalExpense).toBeDefined();
      expect(res.body.profit).toBeDefined();
      expect(res.body.incomeByMethod).toBeDefined();
      expect(res.body.expenseByCategory).toBeDefined();
    });

    it('should filter by date range', async () => {
      const today = new Date().toISOString().split('T')[0];
      const res = await request(app)
        .get(`/api/dashboard?startDate=${today}&endDate=${today}`)
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
    });
  });

  describe('GET /api/dashboard/chart-data', () => {
    it('should return data for charts', async () => {
      const res = await request(app)
        .get('/api/dashboard/chart-data')
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
      expect(res.body.incomeOverTime).toBeDefined();
      expect(res.body.expenseOverTime).toBeDefined();
    });
  });
});

