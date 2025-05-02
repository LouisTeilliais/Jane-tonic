#!/bin/bash

# Appliquer les migrations (production)
npx prisma migrate deploy

# Compiler le projet NestJS
npm run build

# Lancer le projet compilé
npm run start:prod
