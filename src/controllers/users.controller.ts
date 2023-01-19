import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/authentication.service';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { ChangePasswordDto } from '../dto/chage-password.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@Req() req) {
    const user = await this.userService.getProfile(req.user.userId);
    return user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('change-password')
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return await this.userService.changePassword(changePasswordDto);
  }
}
