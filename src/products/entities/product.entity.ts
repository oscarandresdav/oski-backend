import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 45, unique: true })
  main_code: string;

  @Column({ length: 45, unique: true, nullable: true })
  aux_code: string;

  @Column({ length: 255, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  detail: string;

  @Column()
  stock: number;

  @Column({ default: 1 })
  minimum_stock: number;

  @Column({ type: 'decimal', precision: 12, scale: 4 })
  cost: number;

  @Column({ type: 'decimal', precision: 12, scale: 4 })
  price1: number;

  @Column({ type: 'decimal', precision: 10, scale: 4 })
  percentage1: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  pvp1: number;

  @Column({ type: 'decimal', precision: 12, scale: 4, nullable: true })
  price2: number;

  @Column({ type: 'decimal', precision: 10, scale: 4, nullable: true })
  percentage2: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  pvp2: number;

  @Column({ type: 'decimal', precision: 12, scale: 4, nullable: true })
  price3: number;

  @Column({ type: 'decimal', precision: 10, scale: 4, nullable: true })
  percentage3: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  pvp3: number;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @VersionColumn({ nullable: true })
  revision: number;
}
