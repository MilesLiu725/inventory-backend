import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 确保监听 0.0.0.0 让外部可以访问
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, '0.0.0.0');

  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
}

bootstrap();
