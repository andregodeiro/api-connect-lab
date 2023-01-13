import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDeviceDto } from '../dto/create-device.dto';
import { Device } from '../entities/device.entity';
import { DevicesService } from '../services/devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  async findAll(): Promise<Device[]> {
    return await this.devicesService.findAll();
  }

  @Post()
  async create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }
}
