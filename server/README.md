# 📧 Backend Server - Atelier Narcissa

Backend simple para el formulario de contacto con envío de emails.

## 🚀 Instalación

```bash
cd server
npm install
```

## ⚙️ Configuración

1. Copia el archivo de ejemplo:
```bash
cp .env.example .env
```

2. Configura las variables en `.env`:

### Para Gmail:
1. Activa la verificación en 2 pasos en tu cuenta Google
2. Ve a: https://myaccount.google.com/apppasswords
3. Genera una "Contraseña de aplicación"
4. Úsala en `SMTP_PASS`

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
BUSINESS_EMAIL=narcissaatelier@gmail.com
```

### Para otros proveedores:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

## 🏃‍♂️ Ejecutar

### Desarrollo:
```bash
npm run dev
```

### Producción:
```bash
npm start
```

## 🐳 Docker

```bash
# Build
docker build -t narcisa-server .

# Run
docker run -p 3001:3001 --env-file .env narcisa-server
```

## 📡 Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Enviar formulario de contacto

## 🧪 Probar el Endpoint

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "phone": "+34 600 000 000",
    "service": "tapizado",
    "message": "Me gustaría más información sobre el tapizado de un sofá clásico."
  }'
```

## ✉️ Emails que se envían

1. **Email al negocio**: Con toda la información del cliente
2. **Email de confirmación al cliente**: Confirmando que recibimos su consulta

## 🔒 Seguridad

- CORS configurado
- Validación de campos
- Rate limiting (implementar en producción)
- Variables de entorno para credenciales

## 📦 Dependencias

- `express` - Framework web
- `nodemailer` - Envío de emails
- `cors` - CORS middleware
- `dotenv` - Variables de entorno

