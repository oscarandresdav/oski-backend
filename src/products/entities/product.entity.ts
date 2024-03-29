import { Brand } from 'src/brands/entities/brand.entity';
import { Category } from 'src/categories/entities/category.entity';
import { IceRate } from 'src/ice-rates/entities/ice-rate.entity';
import { IvaRate } from 'src/iva-rates/entities/iva-rate.entity';
import { MeasuringUnit } from 'src/measuring-units/entities/measuring-unit.entity';
import { ProductType } from 'src/product-types/entities/product-type.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 45,
    unique: true,
    transformer: {
      from: (value: string) => value,
      to: (value: string) => value.toUpperCase(),
    },
  })
  main_code: string;

  @Column({
    length: 45,
    unique: true,
    nullable: true,
    transformer: {
      from: (value: string) => value,
      to: (value: string) => value.toUpperCase(),
    },
  })
  aux_code: string;

  @Column({
    length: 255,
    unique: true,
    transformer: {
      from: (value: string) => value,
      to: (value: string) => value.toUpperCase(),
    },
  })
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

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => IceRate, (ice_rate) => ice_rate.products)
  ice_rate: IceRate;

  @ManyToOne(() => IvaRate, (iva_rate) => iva_rate.products)
  iva_rate: IvaRate;

  @ManyToOne(() => MeasuringUnit, (measuring_unit) => measuring_unit.products)
  measuring_unit: MeasuringUnit;

  @ManyToOne(() => ProductType, (product_type) => product_type.products)
  product_type: ProductType;
}
