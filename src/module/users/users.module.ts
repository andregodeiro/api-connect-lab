import { Module } from '@nestjs/common';
import { UsersController } from 'src/module/users/users.controller';
import { UsersService } from 'src/module/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Address } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Address]),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
