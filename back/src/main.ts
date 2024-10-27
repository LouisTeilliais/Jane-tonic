import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api')

  app.enableCors({
    origin: ['http://localhost:5001/api'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Méthodes HTTP autorisées.
    allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés.
    credentials: true // Autorise l'envoi de cookies et d'autres informations d'identification.
  });
 
  const config = new DocumentBuilder()
    .setTitle('Jane Tonic')
    .setDescription('The Jane Tonic API description')
    .setVersion('1.0')
    .addTag('Api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const options = new DocumentBuilder().addBearerAuth()
  SwaggerModule.setup('Api', app, document);

  
  await app.listen(process.env.APP_PORT);
}
bootstrap();
