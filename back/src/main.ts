import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  
  app.enableCors({
    origin: [
    'http://localhost:5173',
    'https://janetonic.fr',
    'https://www.janetonic.fr'  
  ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,  
  });
  

  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });

  const config = new DocumentBuilder()
    .setTitle('Jane Tonic')
    .setDescription('The Jane Tonic API description')
    .setVersion('1.0')
    .addTag('Api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const options = new DocumentBuilder().addBearerAuth();
  SwaggerModule.setup('Api', app, document);

  await app.listen(5001);

}
bootstrap();
