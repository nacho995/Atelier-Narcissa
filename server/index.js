import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server running' });
});

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Error configuring email:', error);
  } else {
    console.log('✅ Email server ready');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor completa todos los campos requeridos' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email inválido' 
      });
    }

    // Service names mapping
    const serviceNames = {
      tapizado: 'Tapizado Premium',
      restauracion: 'Restauración de Muebles',
      confeccion: 'Confección a Medida',
      otro: 'Consulta General'
    };

    const serviceName = serviceNames[service] || service;

    // Email to business - ESPECTACULAR
    const businessEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Montserrat', Arial, sans-serif; 
            line-height: 1.8; 
            color: #2c1810; 
            background: linear-gradient(135deg, #faf8f5 0%, #f5e6d3 100%);
            padding: 40px 20px;
          }
          .email-wrapper { max-width: 650px; margin: 0 auto; }
          .container { 
            background: white; 
            border-radius: 24px; 
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(125, 30, 58, 0.15);
            border: 3px solid #d4a574;
          }
          .header { 
            background: linear-gradient(135deg, #7d1e3a 0%, #9d2e4a 50%, #7d1e3a 100%);
            background-size: 200% auto;
            color: white; 
            padding: 50px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
              0deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.03) 10px,
              rgba(255,255,255,0.03) 20px
            );
            animation: shimmer 20s linear infinite;
          }
          @keyframes shimmer {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
          }
          .header-icon {
            font-size: 48px;
            margin-bottom: 15px;
            display: inline-block;
            animation: bounce 2s ease-in-out infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .header h1 { 
            font-family: 'Cormorant Garamond', serif;
            margin: 0; 
            font-size: 36px; 
            font-weight: 700;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
            letter-spacing: 1px;
          }
          .header p {
            font-size: 14px;
            margin-top: 10px;
            opacity: 0.95;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .content { padding: 45px 40px; }
          .intro {
            text-align: center;
            font-size: 18px;
            color: #6b5844;
            margin-bottom: 40px;
            padding: 25px;
            background: linear-gradient(135deg, #fff9f0 0%, #f5e6d3 100%);
            border-radius: 16px;
            border: 2px solid #d4a574;
            font-weight: 600;
          }
          .section-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 24px;
            color: #7d1e3a;
            margin: 35px 0 25px 0;
            padding-bottom: 12px;
            border-bottom: 3px solid;
            border-image: linear-gradient(90deg, #7d1e3a, #b8935f, #d4a574) 1;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .field { 
            margin-bottom: 20px; 
            padding: 20px 25px; 
            background: linear-gradient(135deg, #faf8f5 0%, #fff 100%);
            border-radius: 12px; 
            border-left: 5px solid #b8935f;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
          }
          .field:hover {
            transform: translateX(5px);
          }
          .label { 
            font-weight: 700; 
            color: #7d1e3a; 
            font-size: 11px; 
            text-transform: uppercase; 
            letter-spacing: 1.5px; 
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .value { 
            color: #2c1810; 
            font-size: 17px;
            font-weight: 500;
          }
          .badge { 
            display: inline-block; 
            background: linear-gradient(135deg, #b8935f 0%, #d4a574 100%);
            color: white; 
            padding: 10px 20px; 
            border-radius: 25px; 
            font-size: 14px; 
            font-weight: 700;
            box-shadow: 0 4px 15px rgba(184, 147, 95, 0.4);
            letter-spacing: 0.5px;
          }
          .message-box { 
            background: linear-gradient(135deg, #fff9f0 0%, #fffbf5 100%);
            padding: 30px; 
            border-radius: 16px; 
            border: 3px dashed #d4a574;
            margin-top: 30px;
            box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
          }
          .message-box .label {
            font-size: 13px;
            color: #7d1e3a;
            margin-bottom: 15px;
          }
          .message-box .value {
            white-space: pre-wrap;
            line-height: 1.9;
            color: #2c1810;
            font-size: 16px;
          }
          .cta-box {
            background: linear-gradient(135deg, #7d1e3a 0%, #9d2e4a 100%);
            padding: 30px;
            border-radius: 16px;
            text-align: center;
            margin: 35px 0;
            color: white;
            box-shadow: 0 10px 30px rgba(125, 30, 58, 0.3);
          }
          .cta-box h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 22px;
            margin-bottom: 10px;
            font-weight: 600;
          }
          .cta-box p {
            font-size: 14px;
            opacity: 0.95;
            line-height: 1.6;
          }
          .reply-button {
            display: inline-block;
            background: #b8935f;
            color: white;
            padding: 15px 35px;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 700;
            margin-top: 20px;
            box-shadow: 0 6px 20px rgba(184, 147, 95, 0.4);
            transition: all 0.3s ease;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 13px;
          }
          .footer { 
            text-align: center; 
            color: #6b5844; 
            padding: 40px;
            background: linear-gradient(180deg, transparent 0%, #f5e6d3 100%);
            border-top: 2px solid #d4a574;
          }
          .footer-logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 28px;
            color: #7d1e3a;
            margin-bottom: 15px;
            font-weight: 700;
          }
          .footer-tagline {
            color: #b8935f;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 20px;
          }
          .footer-info {
            font-size: 12px;
            line-height: 1.8;
            color: #6b5844;
          }
          .divider {
            height: 3px;
            background: linear-gradient(90deg, transparent, #d4a574, transparent);
            margin: 30px 0;
            border-radius: 10px;
          }
          .icon { 
            font-size: 18px; 
            margin-right: 5px;
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="container">
            <!-- HEADER -->
            <div class="header">
              <div class="header-icon">💎</div>
              <h1>Nueva Consulta Premium</h1>
              <p>Atelier Narcissa</p>
            </div>
            
            <!-- CONTENT -->
            <div class="content">
              <div class="intro">
                🎉 ¡Excelente noticia! Has recibido una nueva consulta desde tu sitio web
              </div>
              
              <!-- DATOS DEL CLIENTE -->
              <div class="section-title">
                <span>👤</span> Información del Cliente
              </div>
              
              <div class="field">
                <div class="label"><span class="icon">✨</span> Nombre Completo</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label"><span class="icon">📧</span> Correo Electrónico</div>
                <div class="value"><a href="mailto:${email}" style="color: #7d1e3a; text-decoration: none; font-weight: 600;">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label"><span class="icon">📱</span> Teléfono de Contacto</div>
                <div class="value"><a href="tel:${phone}" style="color: #7d1e3a; text-decoration: none; font-weight: 600;">${phone}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label"><span class="icon">🎯</span> Servicio de Interés</div>
                <div class="value"><span class="badge">${serviceName}</span></div>
              </div>
              
              <div class="divider"></div>
              
              <!-- MENSAJE -->
              <div class="section-title">
                <span>💬</span> Mensaje del Cliente
              </div>
              
              <div class="message-box">
                <div class="label"><span class="icon">📝</span> Contenido de la Consulta</div>
                <div class="value">${message}</div>
              </div>
              
              <!-- CTA -->
              <div class="cta-box">
                <h3>⚡ ¡Responde Rápido!</h3>
                <p>La rapidez en la respuesta es clave para convertir esta consulta en un proyecto exitoso.<br>
                <strong>Objetivo: Responder en menos de 24 horas</strong></p>
                <a href="mailto:${email}" class="reply-button">Responder Ahora</a>
              </div>
            </div>
            
            <!-- FOOTER -->
            <div class="footer">
              <div class="footer-logo">Atelier Narcissa</div>
              <div class="footer-tagline">🧵 Tapicería de Lujo desde 1995</div>
              <div class="footer-info">
                Calle Mayor 45, Local 3 · 28013 Madrid, España<br>
                📧 narcissaatelier@gmail.com · 📞 +34 912 345 678
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email to client (confirmation) - ESPECTACULAR
    const clientEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Montserrat', Arial, sans-serif; 
            line-height: 1.8; 
            color: #2c1810; 
            background: linear-gradient(135deg, #faf8f5 0%, #f5e6d3 100%);
            padding: 40px 20px;
          }
          .email-wrapper { max-width: 650px; margin: 0 auto; }
          .container { 
            background: white; 
            border-radius: 24px; 
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(125, 30, 58, 0.15);
            border: 3px solid #d4a574;
          }
          .header { 
            background: linear-gradient(135deg, #7d1e3a 0%, #9d2e4a 50%, #7d1e3a 100%);
            background-size: 200% auto;
            color: white; 
            padding: 50px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 200%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            animation: shine 3s infinite;
          }
          @keyframes shine {
            0% { left: -100%; }
            50%, 100% { left: 100%; }
          }
          .header-icon {
            font-size: 60px;
            margin-bottom: 15px;
            display: inline-block;
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .header h1 { 
            font-family: 'Cormorant Garamond', serif;
            margin: 0; 
            font-size: 38px; 
            font-weight: 700;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 15px rgba(0,0,0,0.3);
            letter-spacing: 1px;
            line-height: 1.3;
          }
          .header p {
            font-size: 15px;
            margin-top: 12px;
            opacity: 0.95;
            font-weight: 400;
            letter-spacing: 3px;
            text-transform: uppercase;
          }
          .content { padding: 45px 40px; }
          .greeting {
            font-size: 24px;
            font-family: 'Cormorant Garamond', serif;
            color: #7d1e3a;
            margin-bottom: 30px;
            font-weight: 600;
          }
          .greeting strong {
            color: #b8935f;
          }
          .success-box {
            background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
            padding: 30px;
            border-radius: 16px;
            border-left: 6px solid #4caf50;
            margin: 30px 0;
            box-shadow: 0 8px 25px rgba(76, 175, 80, 0.2);
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .checkmark {
            font-size: 48px;
            animation: checkmarkPop 0.5s ease-out;
          }
          @keyframes checkmarkPop {
            0% { transform: scale(0) rotate(-180deg); }
            70% { transform: scale(1.2) rotate(10deg); }
            100% { transform: scale(1) rotate(0); }
          }
          .success-text {
            flex: 1;
          }
          .success-text h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 22px;
            color: #2e7d32;
            margin-bottom: 5px;
            font-weight: 700;
          }
          .success-text p {
            font-size: 14px;
            color: #1b5e20;
            margin: 0;
          }
          .service-badge {
            display: inline-block;
            background: linear-gradient(135deg, #7d1e3a 0%, #9d2e4a 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: 700;
            font-size: 15px;
            margin: 20px 0;
            box-shadow: 0 6px 20px rgba(125, 30, 58, 0.3);
            letter-spacing: 0.5px;
          }
          .promise-section {
            background: linear-gradient(135deg, #fff9f0 0%, #f5e6d3 100%);
            padding: 35px;
            border-radius: 16px;
            margin: 35px 0;
            border: 3px solid #d4a574;
          }
          .promise-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 26px;
            color: #7d1e3a;
            text-align: center;
            margin-bottom: 25px;
            font-weight: 700;
          }
          .promise-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin: 18px 0;
            padding: 20px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
          }
          .promise-icon {
            font-size: 32px;
            flex-shrink: 0;
          }
          .promise-text {
            flex: 1;
          }
          .promise-text h4 {
            font-size: 16px;
            color: #7d1e3a;
            margin-bottom: 5px;
            font-weight: 700;
          }
          .promise-text p {
            font-size: 14px;
            color: #6b5844;
            margin: 0;
            line-height: 1.6;
          }
          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 35px 0;
          }
          .contact-card {
            background: linear-gradient(135deg, #faf8f5 0%, #fff 100%);
            padding: 25px;
            border-radius: 16px;
            text-align: center;
            border: 2px solid #d4a574;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 35px rgba(125, 30, 58, 0.15);
          }
          .contact-icon {
            font-size: 36px;
            margin-bottom: 12px;
          }
          .contact-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #7d1e3a;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .contact-value {
            font-size: 14px;
            color: #2c1810;
            font-weight: 600;
          }
          .contact-value a {
            color: #7d1e3a;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .contact-value a:hover {
            color: #b8935f;
          }
          .stats-banner {
            background: linear-gradient(135deg, #7d1e3a 0%, #9d2e4a 50%, #7d1e3a 100%);
            background-size: 200% auto;
            color: white;
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            margin: 35px 0;
            box-shadow: 0 10px 40px rgba(125, 30, 58, 0.3);
            position: relative;
            overflow: hidden;
          }
          .stats-banner::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.02) 10px,
              rgba(255,255,255,0.02) 20px
            );
          }
          .stats-banner-content {
            position: relative;
            z-index: 1;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 25px;
          }
          .stat-item {
            padding: 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 12px;
            backdrop-filter: blur(10px);
          }
          .stat-number {
            font-size: 32px;
            font-weight: 700;
            color: #b8935f;
            margin-bottom: 5px;
            font-family: 'Cormorant Garamond', serif;
          }
          .stat-label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.95;
          }
          .footer { 
            text-align: center; 
            color: #6b5844; 
            padding: 45px 40px;
            background: linear-gradient(180deg, transparent 0%, #f5e6d3 100%);
            border-top: 3px solid;
            border-image: linear-gradient(90deg, transparent, #d4a574, transparent) 1;
          }
          .footer-logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 32px;
            color: #7d1e3a;
            margin-bottom: 12px;
            font-weight: 700;
          }
          .footer-tagline {
            color: #b8935f;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            margin-bottom: 25px;
          }
          .footer-badges {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin: 20px 0;
          }
          .footer-badge {
            background: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            color: #7d1e3a;
            border: 2px solid #d4a574;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          .social-icons {
            margin: 25px 0;
            font-size: 24px;
          }
          .divider {
            height: 3px;
            background: linear-gradient(90deg, transparent, #d4a574, transparent);
            margin: 35px 0;
            border-radius: 10px;
          }
          @media (max-width: 600px) {
            .stats-grid { grid-template-columns: 1fr; }
            .contact-grid { grid-template-columns: 1fr; }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="container">
            <!-- HEADER -->
            <div class="header">
              <div class="header-icon">✨</div>
              <h1>¡Gracias por Elegirnos!</h1>
              <p>Atelier Narcissa</p>
            </div>
            
            <!-- CONTENT -->
            <div class="content">
              <p class="greeting">Hola <strong>${name}</strong>,</p>
              
              <!-- SUCCESS MESSAGE -->
              <div class="success-box">
                <div class="checkmark">✅</div>
                <div class="success-text">
                  <h3>¡Consulta Recibida con Éxito!</h3>
                  <p>Tu mensaje ha llegado perfectamente a nuestro equipo</p>
                </div>
              </div>
              
              <p style="font-size: 16px; line-height: 1.9; color: #2c1810; margin: 25px 0;">
                Estamos emocionados de saber que estás interesado en nuestro servicio de <span class="service-badge">${serviceName}</span>
              </p>
              
              <p style="font-size: 16px; line-height: 1.9; color: #2c1810;">
                En <strong>Atelier Narcissa</strong>, cada proyecto es único y merece nuestra máxima atención. Tu consulta será revisada personalmente por nuestro equipo de especialistas.
              </p>
              
              <div class="divider"></div>
              
              <!-- PROMISES -->
              <div class="promise-section">
                <h2 class="promise-title">💎 Qué Puedes Esperar</h2>
                
                <div class="promise-item">
                  <div class="promise-icon">⚡</div>
                  <div class="promise-text">
                    <h4>Respuesta Rápida Garantizada</h4>
                    <p>Te contactaremos en <strong>menos de 24 horas</strong> con una propuesta personalizada</p>
                  </div>
                </div>
                
                <div class="promise-item">
                  <div class="promise-icon">👨‍🎨</div>
                  <div class="promise-text">
                    <h4>Consulta con Expertos</h4>
                    <p>Un especialista con más de 15 años de experiencia revisará tu proyecto</p>
                  </div>
                </div>
                
                <div class="promise-item">
                  <div class="promise-icon">📋</div>
                  <div class="promise-text">
                    <h4>Propuesta Detallada</h4>
                    <p>Recibirás un presupuesto completo, plazos de entrega y muestras de materiales</p>
                  </div>
                </div>
                
                <div class="promise-item">
                  <div class="promise-icon">💰</div>
                  <div class="promise-text">
                    <h4>Presupuesto sin Compromiso</h4>
                    <p>Totalmente gratuito y adaptado a tus necesidades específicas</p>
                  </div>
                </div>
              </div>
              
              <div class="divider"></div>
              
              <!-- CONTACT INFO -->
              <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 24px; color: #7d1e3a; text-align: center; margin-bottom: 25px; font-weight: 700;">
                ¿Necesitas Contactarnos?
              </h3>
              
              <div class="contact-grid">
                <div class="contact-card">
                  <div class="contact-icon">📧</div>
                  <div class="contact-label">Email</div>
                  <div class="contact-value">
                    <a href="mailto:narcissaatelier@gmail.com">Narcissaatelier<br>@gmail.com</a>
                  </div>
                </div>
                
                <div class="contact-card">
                  <div class="contact-icon">📱</div>
                  <div class="contact-label">Teléfono</div>
                  <div class="contact-value">
                    <a href="tel:+34912345678">+34 912 345 678</a>
                  </div>
                </div>
                
                <div class="contact-card">
                  <div class="contact-icon">📍</div>
                  <div class="contact-label">Ubicación</div>
                  <div class="contact-value">
                    Calle Mayor 45<br>Local 3, Madrid
                  </div>
                </div>
              </div>
              
              <!-- STATS BANNER -->
              <div class="stats-banner">
                <div class="stats-banner-content">
                  <p style="font-size: 18px; margin-bottom: 10px; font-weight: 300;">
                    Confía en la experiencia que nos respalda
                  </p>
                  <div class="stats-grid">
                    <div class="stat-item">
                      <div class="stat-number">29+</div>
                      <div class="stat-label">Años de Experiencia</div>
                    </div>
                    <div class="stat-item">
                      <div class="stat-number">3,500+</div>
                      <div class="stat-label">Proyectos Completados</div>
                    </div>
                    <div class="stat-item">
                      <div class="stat-number">100%</div>
                      <div class="stat-label">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- FOOTER -->
            <div class="footer">
              <div class="footer-logo">🧵 Atelier Narcissa</div>
              <div class="footer-tagline">Tapicería de Lujo desde 1995</div>
              
              <div class="footer-badges">
                <span class="footer-badge">✨ Artesanía Premium</span>
                <span class="footer-badge">🎯 Atención Personalizada</span>
                <span class="footer-badge">💎 Calidad Garantizada</span>
              </div>
              
              <div class="social-icons">
                📸 Instagram · 👤 Facebook · 📌 Pinterest
              </div>
              
              <p style="font-size: 12px; color: #6b5844; margin-top: 20px; line-height: 1.8;">
                <em>"Transformamos muebles en obras maestras únicas"</em><br>
                © ${new Date().getFullYear()} Atelier Narcissa. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send emails
    await Promise.all([
      // Email to business
      transporter.sendMail({
        from: `"Formulario Web" <${process.env.SMTP_USER}>`,
        to: process.env.BUSINESS_EMAIL || process.env.SMTP_USER,
        subject: `💎 Nueva Consulta - ${serviceName}`,
        html: businessEmailHTML,
        replyTo: email,
      }),
      
      // Confirmation email to client
      transporter.sendMail({
        from: `"Atelier Narcissa" <${process.env.SMTP_USER}>`,
        to: email,
        subject: '✨ Confirmación de tu consulta - Atelier Narcissa',
        html: clientEmailHTML,
      }),
    ]);

    console.log(`✅ Email sent successfully from ${email}`);

    res.json({ 
      success: true, 
      message: '¡Consulta enviada! Te responderemos pronto.' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor intenta de nuevo.' 
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.SMTP_HOST || 'smtp.gmail.com'}`);
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:5173'}\n`);
});

