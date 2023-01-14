import { Injectable, NotFoundException } from '@nestjs/common';
import { Device } from '../entities/device.entity';
import { Info } from '../entities/device-info.entity';
import { CreateDeviceDto } from '../dto/create-device.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDevices } from 'src/entities/user-devices.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
    @InjectRepository(Info)
    private readonly infoRepository: Repository<Info>,
    @InjectRepository(UserDevices)
    private readonly userDevicesRepository: Repository<UserDevices>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateDeviceDto): Promise<string> {
    const device = new Device();
    device.name = dto.name;
    device.photoUrl = dto.photoUrl;
    device.type = dto.type;
    device.madeBy = dto.madeBy;
    await this.deviceRepository.save(device);

    const info = new Info();
    info.ip_address = dto.ip_address;
    info.mac_address = dto.mac_address;
    info.signal = dto.signal;
    await this.infoRepository.save(info);

    device.info = info;
    await this.deviceRepository.save(device);

    return 'Dispositivo criado com sucesso!';
  }

  async findAll(): Promise<Device[]> {
    return await this.deviceRepository.find({
      relations: ['info'],
    });
  }

  async linkDeviceToUser(
    userId: number,
    deviceId: number,
    location: string,
    status: string,
  ): Promise<string> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    const device = await this.deviceRepository.findOne({
      where: { _id: deviceId },
    });
    if (!device) {
      throw new NotFoundException('Dispositivo não encontrado!');
    }

    const userDevice = new UserDevices();
    userDevice.user = user;
    userDevice.device = device;
    userDevice.location = location;
    userDevice.status = status;
    await this.userDevicesRepository.save(userDevice);

    return 'Dispositivo vinculado com sucesso';
  }
}
