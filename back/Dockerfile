FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npx prisma migrate

COPY . .

COPY start.sh /app/

EXPOSE 5001

CMD ["sh", "/app/start.sh"]
