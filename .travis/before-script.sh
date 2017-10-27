#!/usr/bin/env bash

if [ ! -f .env ]; then
    echo "Generating .env file."
    cp .env.example .env
fi

docker-compose down -v
docker-compose up -d
docker-compose ps

until nc -z -v -w30 172.1.1.1 3306
do
    sleep 1
done

docker-compose exec mysql mysql -e "SOURCE initial.sql"

node .travis/populate.js