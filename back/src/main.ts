import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api')

  app.enableCors({
    // origin: ['http://localhost:5173'], // URL FRONT
    origin: ['https://janetonic.fr/', 'https://api.janetonic.fr/'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  });

  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  //   if (req.method === 'OPTIONS') {
  //     return res.sendStatus(204);
  //   }
  //   next();
  // });
  
 
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
