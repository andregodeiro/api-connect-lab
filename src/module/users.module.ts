import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';
import { UsersService } from 'src/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Address } from 'src/entities/user-address.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

export const passportModule = PassportModule.register({
  defaultStrategy: 'local',
});

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Address]),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    passportModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
