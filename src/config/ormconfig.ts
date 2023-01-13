import { ConnectionOptions } from 'typeorm';
import { User, Address } from '../entities/user.entity';
import 'dotenv/config.js';
import { Device } from '../entities/device.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [User, Address, Device],
  migrations: ['src/migration/**/*.ts'],
};

export = config;
