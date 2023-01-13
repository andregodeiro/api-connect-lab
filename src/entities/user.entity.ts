import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from './user-address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  fullName: string;

  @Column({ length: 255, nullable: true })
  photoUrl: string;

  @Column({ length: 255, unique: true, nullable: false })
  email: string;

  @Column({ length: 255, nullable: false })
  password: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn()
  address: Address;
}
