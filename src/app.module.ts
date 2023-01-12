import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth-login.module';
import 'dotenv/config.js';
import ormconfig = require('../ormconfig');

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(ormconfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
