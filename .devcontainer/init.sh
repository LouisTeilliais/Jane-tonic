#!/bin/sh
echo "🌳 Initializing Git"
[ ! -d "/app_businessapptemplate/.git" ] && git init

echo "🏠 Installing root packages"
(npm ci && chmod ug+x .husky/*)

echo "😺 Installing back packages"
(cd back && npm ci \
    && sudo chmod -R 777 /usr/lib/node_modules/prisma \
    && npm run deploy:dev \
    && PGPASSWORD=Your_password123 psql -U sa -h db -d postgres -f /app_interne_athena/sql/init.sql)

echo "⚛️ Installing front packages"
(cd front && npm ci)
