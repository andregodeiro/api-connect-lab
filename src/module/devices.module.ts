import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesController } from '../controllers/devices.controller';
import { DevicesService } from '../services/devices.service';
import { Device } from '../entities/device.entity';
import { Info } from '../entities/device-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Device, Info])],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
