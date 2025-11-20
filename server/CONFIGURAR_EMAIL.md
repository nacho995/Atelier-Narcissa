# 📧 Configurar Email de Gmail - narcissaatelier@gmail.com

## ⚠️ IMPORTANTE: Configurar Contraseña de Aplicación

Para que el servidor pueda enviar emails, necesitas generar una **Contraseña de Aplicación** en Gmail.

## 🔐 Pasos para Gmail (narcissaatelier@gmail.com)

### 1️⃣ Activa la Verificación en 2 Pasos

1. Ve a: https://myaccount.google.com/security
2. En "Acceso a Google", haz clic en "Verificación en dos pasos"
3. Sigue los pasos para activarla (necesitas tu teléfono)

### 2️⃣ Genera una Contraseña de Aplicación

1. Una vez activada la verificación en 2 pasos, ve a: https://myaccount.google.com/apppasswords
2. En "Seleccionar app", elige **"Correo"**
3. En "Seleccionar dispositivo", elige **"Otro (nombre personalizado)"**
4. Escribe: **"Atelier Narcissa Web"**
5. Haz clic en **"Generar"**
6. Google te mostrará una contraseña de 16 caracteres (ejemplo: `abcd efgh ijkl mnop`)

### 3️⃣ Configura el Archivo .env

1. Abre el archivo `/server/.env`
2. Reemplaza `PENDIENTE_CONFIGURAR` con la contraseña generada (sin espacios):

```env
SMTP_PASS=abcdefghijklmnop
```

## 🧪 Probar que Funciona

```bash
# 1. Instalar dependencias
cd server
npm install

# 2. Iniciar servidor
npm start

# 3. En otra terminal, probar el endpoint
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prueba Test",
    "email": "tu-email@gmail.com",
    "service": "tapizado",
    "message": "Este es un mensaje de prueba"
  }'
```

## ✅ Si Todo Funciona

Deberías recibir **2 emails**:
1. 📧 **A narcissaatelier@gmail.com** - Con la información del cliente
2. 📧 **Al email del cliente** - Confirmación de recepción

## ❌ Problemas Comunes

### "Invalid login"
- Verifica que la contraseña de aplicación esté correcta (sin espacios)
- Asegúrate de que la verificación en 2 pasos esté activa

### "SMTP timeout"
- Verifica tu conexión a internet
- Prueba cambiar el puerto a 465 (en .env: `SMTP_PORT=465`)

### "From address rejected"
- Verifica que el email en SMTP_USER sea exactamente: `narcissaatelier@gmail.com`

## 🔄 Alternativa: Usar otro Servicio de Email

Si prefieres no usar Gmail, puedes usar:

### SendGrid (Gratis hasta 100 emails/día)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=tu-api-key-de-sendgrid
```

### Mailgun (Gratis hasta 5000 emails/mes)
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@tu-dominio.mailgun.org
SMTP_PASS=tu-password-de-mailgun
```

## 📞 ¿Necesitas Ayuda?

Si tienes problemas, revisa los logs del servidor:
```bash
cd server
npm run dev
```

Los errores aparecerán en la terminal.

