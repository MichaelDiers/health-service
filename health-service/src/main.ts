import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import InjectionName from './types/injection-name.enum';

/**
 * Initialize the nestjs application.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(InjectionName.PORT);
  await app.listen(port);
}

bootstrap();
