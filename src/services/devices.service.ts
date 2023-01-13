import { Injectable } from '@nestjs/common';
import { Device } from '../entities/device.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
  ) {}

  async findAll(): Promise<Device[]> {
    return await this.deviceRepository.find();
  }
}
