import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 9000;
  await app.listen(port);

  console.log(`listening on port  :${port}`);
}
bootstrap();
