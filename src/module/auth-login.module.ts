import { Module } from '@nestjs/common';
import { AuthService } from '../services/authentication.service';
import { AuthController } from '../controllers/authentication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Address } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
