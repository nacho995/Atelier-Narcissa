import request from 'supertest';
import bcrypt from 'bcryptjs';
import { app } from '../src/index.js';
import { prisma } from '../src/utils/db.js';

describe('Auth API', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  describe('POST /api/auth/login', () => {
    it('should return 401 with invalid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'wrong@test.com', password: 'wrongpass' });
      
      expect(res.status).toBe(401);
      expect(res.body.error).toBeDefined();
    });

    it('should return token with valid credentials', async () => {
      // Primero crear usuario de prueba
      const hashedPassword = await bcrypt.hash('password123', 10);
      
      await prisma.user.create({
        data: {
          email: 'narcisa@test.com',
          password: hashedPassword,
          name: 'Narcisa'
        }
      });

      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'narcisa@test.com', password: 'password123' });
      
      expect(res.status).toBe(200);
      expect(res.body.token).toBeDefined();
      expect(res.body.user.email).toBe('narcisa@test.com');
    });
  });

  describe('GET /api/auth/me', () => {
    it('should return 401 without token', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.status).toBe(401);
    });

    it('should return user with valid token', async () => {
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({ email: 'narcisa@test.com', password: 'password123' });
      
      const token = loginRes.body.token;
      
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${token}`);
      
      expect(res.status).toBe(200);
      expect(res.body.email).toBe('narcisa@test.com');
    });
  });
});

