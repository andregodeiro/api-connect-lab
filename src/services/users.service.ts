import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from '../entities/user.entity';
import { Address } from 'src/entities/user-address.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { ChangePasswordDto } from '../dto/chage-password.dto';
import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(dto: CreateUserDto): Promise<string> {
    // validação dos dados
    const errors = await validate(dto);
    if (errors.length > 0) {
      // tratamento dos erros de validação
    }
    if (dto.password !== dto.confirmPassword) {
      // tratamento de senha não confere
    }
    if (!dto.photoUrl) {
      dto.photoUrl = 'default.jpg';
    }
    const passwordHash = await bcrypt.hash(dto.password, 8);

    // criação e salva do usuário e endereço no banco de dados
    const user = new User();
    user.fullName = dto.fullName;
    user.photoUrl = dto.photoUrl;
    user.email = dto.email;
    user.password = passwordHash;
    user.phone = dto.phone;
    await this.userRepository.save(user);

    const address = new Address();
    address.zipCode = dto.zipCode;
    address.street = dto.street;
    address.number = dto.number;
    address.neighborhood = dto.neighborhood;
    address.city = dto.city;
    address.state = dto.state;
    address.complement = dto.complement;
    await this.addressRepository.save(address);

    user.address = address;
    await this.userRepository.save(user);

    return 'Usuário criado com sucesso!';
  }

  async changePassword(changePasswordDto: ChangePasswordDto): Promise<void> {
    const { email, oldPassword, newPassword, newPasswordConfirm } =
      changePasswordDto;

    // checa se o e-mail existe no db
    const options: FindOneOptions = {
      where: {
        email: email,
      },
    };
    const user = await this.userRepository.findOne(options);

    // checa se a senha confere no db
    const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordMatched) {
      throw new HttpException(
        'Sua senha antiga não confere!',
        HttpStatus.BAD_REQUEST,
      );
    }

    // checa se a senha nova confere com a confirmação de senha
    if (newPassword !== newPasswordConfirm) {
      throw new HttpException(
        'A nova senha não confere!',
        HttpStatus.BAD_REQUEST,
      );
    }

    // hash newPassword
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // atualiza a senha no db
    await this.userRepository.update(
      { email },
      { password: hashedNewPassword },
    );
  }
}
