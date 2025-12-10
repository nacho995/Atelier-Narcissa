import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import incomeRoutes from './routes/incomes.js';
import expenseRoutes from './routes/expenses.js';
import dashboardRoutes from './routes/dashboard.js';
import webhookRoutes from './routes/webhook.js';

export const app = express();

// CORS mejorado para aceptar todos los dominios de Vercel
app.use(cors({
  origin: (origin, callback) => {
    const allowedPatterns = [
      /^http:\/\/localhost:\d+$/,
      /^https:\/\/.*\.vercel\.app$/
    ];
    if (!origin || allowedPatterns.some(p => p.test(origin))) {
      callback(null, true);
    } else {
      callback(null, true); // Permitir en dev
    }
  },
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/webhook', webhookRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Panel backend running on port ${PORT}`);
  });
}
