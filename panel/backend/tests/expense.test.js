import request from 'supertest';
import bcrypt from 'bcryptjs';
import { app } from '../src/index.js';
import { prisma } from '../src/utils/db.js';

let authToken;

describe('Expense API', () => {
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
  });

  afterAll(async () => {
    await prisma.expense.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  describe('POST /api/expenses', () => {
    it('should create expense', async () => {
      const res = await request(app)
        .post('/api/expenses')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          amount: 200,
          category: 'telas',
          notes: 'Seda italiana'
        });
      
      expect(res.status).toBe(201);
      expect(res.body.amount).toBe(200);
      expect(res.body.category).toBe('telas');
    });
  });

  describe('GET /api/expenses', () => {
    it('should list expenses', async () => {
      const res = await request(app)
        .get('/api/expenses')
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  describe('GET /api/expenses/summary', () => {
    it('should return totals by category', async () => {
      const res = await request(app)
        .get('/api/expenses/summary')
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
      expect(res.body.total).toBeDefined();
      expect(res.body.byCategory).toBeDefined();
    });
  });
});

