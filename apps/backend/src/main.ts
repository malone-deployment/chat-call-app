/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './app.module';

const HOST = '0.0.0.0';
const PORT = Number(process.env.PORT) || 8080;
async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  if (process.env.NODE_ENV === 'production') {
    app.enableCors({
      origin: 'https://web-service-422041495987.asia-southeast1.run.app', // Replace with the frontend's URL in production
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    });
  } else {
    app.enableCors();
  }
  await app.listen(PORT, HOST).then(() => {
    Logger.log(
      `** Nest Live Development Server is listening on ${HOST}:${PORT}, open your browser on http://localhost:${PORT}/ **`
    );
  });
}
bootstrap();
