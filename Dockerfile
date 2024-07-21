FROM node:20

ARG ENV

WORKDIR /app

COPY . ./

WORKDIR /app/front
RUN npm ci
RUN npm run build:${ENV}

WORKDIR /app
RUN cp -r front/build/. back/client

WORKDIR /app/back
RUN npm ci
RUN npm run build

WORKDIR /app

EXPOSE 5000

CMD npm run start
