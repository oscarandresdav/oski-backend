import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class MeasuringUnit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
    unique: true,
    transformer: {
      from: (value: string) => value,
      to: (value: string) => value.toUpperCase(),
    },
  })
  name: string;

  @Column({ length: 45, nullable: true })
  symbol: string;

  @Column({ type: 'smallint', unique: true })
  sort: number;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @VersionColumn({ nullable: true })
  revision: number;

  @OneToMany(() => Product, (product) => product.measuring_unit)
  products: Product[];
}
