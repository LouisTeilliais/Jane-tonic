FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY start.sh /app/

EXPOSE 3001

CMD ["sh", "/app/start.sh"]
