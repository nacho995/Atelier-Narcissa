# 🪡 Atelier Narcissa - Tapicería de Lujo

Web profesional para negocio de tapicería premium con más de 29 años de experiencia. Diseño moderno, elegante y completamente responsivo.

## 🎯 Características

- **Hero Section**: Presentación impactante con estadísticas y CTA
- **Servicios**: Tapizado Premium, Restauración de Muebles, Confección a Medida
- **Galería**: Sistema de filtros (Todos/Tapizado/Restauración/Confección) con animaciones
- **Formulario de Contacto**: Backend con envío de emails HTML espectaculares
- **Diseño Premium**: Colores burgundy (#7d1e3a), gold (#b8935f), navy (#1a2332)
- **100% Responsive**: Optimizado para móvil, tablet y desktop

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Backend**: Express.js + Nodemailer
- **Deployment**: Docker + Docker Compose

## 🚀 Instalación y Uso

### Frontend
```bash
npm install
npm run dev          # Desarrollo (http://localhost:5173)
npm run build        # Producción
npm run preview      # Preview build
```

### Backend
```bash
cd server
npm install
cp .env.template .env   # Configurar SMTP_PASS (ver server/CONFIGURAR_EMAIL.md)
npm start               # Puerto 3001
```

### Docker (Producción)
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📁 Estructura

```
/src
  /components
    - Header.jsx      # Navegación premium con burger animado
    - Hero.jsx        # Sección principal con CTAs
    - About.jsx       # Historia del negocio
    - Services.jsx    # Cards de servicios
    - Gallery.jsx     # Galería con filtros
    - Contact.jsx     # Formulario + backend integration
/server
  - index.js          # API Express + email sender
  - .env.template     # Variables de entorno
```

## 📧 Configuración Email

1. Ir a cuenta Gmail → Seguridad → Verificación en 2 pasos
2. Crear "Contraseña de aplicación"
3. Pegar en `server/.env` → `SMTP_PASS`

Ver guía completa: `server/CONFIGURAR_EMAIL.md`

## 🎨 Paleta de Colores

```css
--burgundy: #7d1e3a      /* Color principal */
--gold: #b8935f          /* Acentos premium */
--navy: #1a2332          /* Fondos oscuros */
--cream: #faf8f5         /* Fondos claros */
--charcoal: #2c2c2c      /* Texto */
```

## 📱 Breakpoints Responsivos

- `xs`: < 640px (móvil)
- `sm`: 640px (móvil grande)
- `md`: 768px (tablet)
- `lg`: 1024px (laptop)
- `xl`: 1280px (desktop)

## 🐳 Docker

**Frontend**: Nginx en puerto 80  
**Backend**: Node.js en puerto 3001  

```bash
# Build y deploy
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d

# Logs
docker-compose -f docker-compose.prod.yml logs -f
```

## 📝 Contacto

**Email**: Narcissaatelier@gmail.com  
**Negocio**: Atelier Narcissa - Desde 1995

---

*Desarrollado con ❤️ para artesanía de alta calidad*
