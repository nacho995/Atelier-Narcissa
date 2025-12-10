import request from 'supertest';
import bcrypt from 'bcryptjs';
import { app } from '../src/index.js';
import { prisma } from '../src/utils/db.js';

let authToken;

describe('Income API', () => {
  beforeAll(async () => {
    await prisma.$connect();
    
    // Crear usuario y obtener token
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
  });

  afterAll(async () => {
    await prisma.income.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  describe('POST /api/incomes', () => {
    it('should create income with valid data', async () => {
      const res = await request(app)
        .post('/api/incomes')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          amount: 1500,
          paymentMethod: 'efectivo',
          concept: 'Vestido de novia modelo A'
        });
      
      expect(res.status).toBe(201);
      expect(res.body.amount).toBe(1500);
      expect(res.body.paymentMethod).toBe('efectivo');
    });

    it('should reject invalid payment method', async () => {
      const res = await request(app)
        .post('/api/incomes')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          amount: 1500,
          paymentMethod: 'invalido',
          concept: 'Test'
        });
      
      expect(res.status).toBe(400);
    });
  });

  describe('GET /api/incomes', () => {
    it('should list incomes with filters', async () => {
      const res = await request(app)
        .get('/api/incomes')
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('should filter by date range', async () => {
      const today = new Date().toISOString().split('T')[0];
      const res = await request(app)
        .get(`/api/incomes?startDate=${today}&endDate=${today}`)
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
    });
  });

  describe('GET /api/incomes/summary', () => {
    it('should return totals', async () => {
      const res = await request(app)
        .get('/api/incomes/summary')
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
      expect(res.body.total).toBeDefined();
      expect(res.body.byPaymentMethod).toBeDefined();
    });
  });
});

