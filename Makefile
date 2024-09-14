.PHONY: build up down exec start npm_i npm_i_start

# イメージのビルド
build:
	docker compose build

# コンテナの起動 (バックグラウンド)
up:
	docker compose up -d

# コンテナの停止
down:
	docker compose down

# コンテナの bash に入る
exec:
	docker compose exec react-app bash

# コンテナに入り react アプリケーション起動
start:
	docker compose exec react-app npm start

# コンテナに入り npm install
npm_i:
	docker compose exec react-app npm install

# コンテナに入り npm install と npm start
npm_i_start:
	docker compose exec react-app npm install && docker compose exec react-app npm start