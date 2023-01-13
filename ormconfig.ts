import { ConnectionOptions } from 'typeorm';
import { User, Address } from './src/entities/user.entity';
import 'dotenv/config.js';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [User, Address],
  migrations: [],
};

export = config;
