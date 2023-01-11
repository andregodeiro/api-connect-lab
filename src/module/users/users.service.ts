import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Address } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';
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

    return 'Usuário criado com sucesso!';
  }
}
