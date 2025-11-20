.PHONY: help dev prod build up down logs clean test

help: ## Muestra esta ayuda
	@echo "Comandos disponibles para Narcissa:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Inicia servidor de desarrollo con hot reload
	docker-compose up dev

dev-build: ## Construye y inicia desarrollo
	docker-compose build dev
	docker-compose up dev

prod: ## Inicia servidor de producción
	docker-compose up web

prod-build: ## Construye y inicia producción
	docker-compose build web
	docker-compose up web

prod-ssl: ## Inicia producción con SSL (certbot)
	docker-compose -f docker-compose.prod.yml up -d

build: ## Construye todas las imágenes
	docker-compose build

up: ## Inicia todos los servicios en segundo plano
	docker-compose up -d

down: ## Detiene todos los servicios
	docker-compose down

logs: ## Muestra logs en tiempo real
	docker-compose logs -f

logs-web: ## Logs solo del servicio web
	docker-compose logs -f web

logs-dev: ## Logs solo del servicio dev
	docker-compose logs -f dev

restart: ## Reinicia todos los servicios
	docker-compose restart

clean: ## Limpia contenedores, volúmenes e imágenes
	docker-compose down -v
	docker system prune -f

test: ## Ejecuta tests en contenedor
	docker-compose exec dev npm run test

shell: ## Abre shell en contenedor dev
	docker-compose exec dev sh

install: ## Instala dependencias en contenedor
	docker-compose exec dev npm install

ps: ## Muestra contenedores activos
	docker-compose ps

stats: ## Muestra estadísticas de contenedores
	docker stats

backup: ## Backup de volúmenes
	@echo "Creando backup..."
	docker run --rm -v narcissa_certbot-etc:/data -v $(PWD):/backup alpine tar czf /backup/certbot-backup.tar.gz -C /data .
	@echo "Backup creado: certbot-backup.tar.gz"

