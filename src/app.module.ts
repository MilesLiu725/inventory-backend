import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PartsModule } from './parts/parts.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // 读取 .env 配置
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // ⚠️ 生产环境请改为 false
    }), PartsModule,
  ],
})
export class AppModule {}
