import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './Exception/http-exception.filter';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* gestion personnalisée des exceptions au niveau global*/
  app.useGlobalFilters(new HttpExceptionFilter());

  // Activer la ValidationPipe globalement
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true, // Transforme automatiquement les objets en instances de classe
      //whitelist: true, // Supprime les propriétés non définies dans le DTO
      //forbidNonWhitelisted: true, // Lance une erreur si une propriété non autorisée est envoyée
    }),
  );
  app.enableCors();

  await app.listen(process.env.PORT ?? 3001);
  Logger.log(`Le serveur a démarré à http://localhost:${process.env.PORT ?? 3001}`, 'Bootstrap');

}
bootstrap();

// DATABASE_HOST=localhost
// DATABASE_PORT=3306
// DATABASE_USER=root
// DATABASE_PASSWORD=lorryMARDIGNY57
// DATABASE_DB=trilis
