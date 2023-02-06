up:
	docker-compose up -d
	docker-compose exec app npm run watch

init:
	docker-compose up --build -d
	docker-compose exec app composer install
	docker-compose exec app cp .env.example .env
	docker-compose exec app php artisan key:generate
	docker-compose exec app php artisan migrate:refresh --seed
	docker-compose exec app npm install
	docker-compose exec app npm run watch

down:
	docker-compose down

dbfresh:
	docker-compose exec app php artisan migrate:fresh --seed