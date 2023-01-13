import { Controller, Get } from '@nestjs/common';
import { Device } from '../entities/device.entity';
import { DevicesService } from 'src/services/devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  async findAll(): Promise<Device[]> {
    return await this.devicesService.findAll();
  }
}
