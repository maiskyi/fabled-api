import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';

import { AppModule } from './app.module';

const auth = basicAuth({
  challenge: true,
  users: {
    [process.env.SWAGGER_LOGIN]: process.env.SWAGGER_PASSWORD,
  },
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGINS.split(',').map((v) => v.trim()),
  });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Fabled API')
    .setDescription('Fabled API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, documentFactory, {
    jsonDocumentUrl: 'docs/swagger.json',
  });

  if (process.env.ENVIRONMENT !== 'local') {
    app.use('/docs', auth);
  }

  await app.listen(process.env.PORT);
}

bootstrap();
