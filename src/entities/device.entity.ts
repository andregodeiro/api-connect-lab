import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Device')
export class Device {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  name: string;

  @Column()
  photourl: string;

  @Column()
  type: string;

  @Column()
  madeby: string;

  @Column()
  virtual_id: string;

  @Column()
  ip_address: string;

  @Column()
  mac_address: string;

  @Column()
  signal: string;
}
