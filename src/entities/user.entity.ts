import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 8, nullable: false })
  zipCode: string;

  @Column({ length: 255, nullable: false })
  street: string;

  @Column({ length: 20, nullable: false })
  number: string;

  @Column({ length: 100, nullable: false })
  neighborhood: string;

  @Column({ length: 100, nullable: false })
  city: string;

  @Column({ length: 2, nullable: false })
  state: string;

  @Column({ length: 100, nullable: true })
  complement: string;
}
