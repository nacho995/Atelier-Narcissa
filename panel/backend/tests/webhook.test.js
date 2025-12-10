import request from 'supertest';
import { app } from '../src/index.js';
import { prisma } from '../src/utils/db.js';

describe('Payment Webhook API', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.income.deleteMany();
    await prisma.$disconnect();
  });

  describe('POST /api/webhook/payment', () => {
    it('should register payment with valid API key', async () => {
      const res = await request(app)
        .post('/api/webhook/payment')
        .set('X-API-Key', process.env.API_KEY || 'dev-api-key-cambiar-en-produccion')
        .send({
          amount: 2000,
          paymentMethod: 'tarjeta',
          concept: 'Vestido modelo B - Pago online'
        });
      
      expect(res.status).toBe(201);
      expect(res.body.isAutomatic).toBe(true);
    });

    it('should reject without API key', async () => {
      const res = await request(app)
        .post('/api/webhook/payment')
        .send({
          amount: 2000,
          paymentMethod: 'tarjeta',
          concept: 'Test'
        });
      
      expect(res.status).toBe(401);
    });

    it('should reject invalid payment method', async () => {
      const res = await request(app)
        .post('/api/webhook/payment')
        .set('X-API-Key', process.env.API_KEY || 'dev-api-key-cambiar-en-produccion')
        .send({
          amount: 2000,
          paymentMethod: 'efectivo', // efectivo no permitido por webhook
          concept: 'Test'
        });
      
      expect(res.status).toBe(400);
    });
  });
});

