import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from './module/auth-login.module';
import 'dotenv/config.js';
import * as ormconfig from './config/ormconfig';
import { DevicesModule } from './module/devices.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(ormconfig),
    AuthenticationModule,
    DevicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
