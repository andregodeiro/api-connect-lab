import { Injectable } from '@nestjs/common';
import { Device } from '../entities/device.entity';
import { Info } from '../entities/device-info.entity';
import { CreateDeviceDto } from '../dto/create-device.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
    @InjectRepository(Info)
    private readonly infoRepository: Repository<Info>,
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
}
