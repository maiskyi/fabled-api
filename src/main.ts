import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGINS.split(',').map((v) => v.trim()),
  });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Fabled API')
    .setDescription('Fabled API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, documentFactory, {
    jsonDocumentUrl: 'docs/swagger.json',
  });

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
