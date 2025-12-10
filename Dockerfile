# Build web principal
FROM node:20-alpine AS web-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Build panel frontend
FROM node:20-alpine AS panel-frontend-builder
WORKDIR /app
COPY panel/frontend/package*.json ./
RUN npm ci
COPY panel/frontend/ ./
RUN npm run build

# Build panel backend
FROM node:20-slim AS panel-backend-builder
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY panel/backend/package*.json ./
RUN npm ci --omit=dev
COPY panel/backend/ ./
RUN npx prisma generate

# Production stage
FROM node:20-slim

# Install nginx and supervisor
RUN apt-get update && apt-get install -y nginx supervisor openssl && rm -rf /var/lib/apt/lists/*

# Copy nginx config
COPY nginx.conf /etc/nginx/sites-available/default
RUN rm -f /etc/nginx/sites-enabled/default && ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# Copy web principal
COPY --from=web-builder /app/dist /usr/share/nginx/html

# Copy panel frontend
COPY --from=panel-frontend-builder /app/dist /usr/share/nginx/html/panel

# Copy panel backend
WORKDIR /app/panel-backend
COPY --from=panel-backend-builder /app ./

# Create data directory
RUN mkdir -p /app/data

# Supervisor config
RUN echo '[supervisord]\n\
nodaemon=true\n\
\n\
[program:nginx]\n\
command=nginx -g "daemon off;"\n\
autostart=true\n\
autorestart=true\n\
\n\
[program:panel-backend]\n\
command=sh -c "npx prisma db push && node prisma/seed.js 2>/dev/null; node src/index.js"\n\
directory=/app/panel-backend\n\
autostart=true\n\
autorestart=true\n\
environment=NODE_ENV="production",DATABASE_URL="file:/app/data/panel.db",PORT="4000"\n\
' > /etc/supervisor/conf.d/supervisord.conf

ENV NODE_ENV=production

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
