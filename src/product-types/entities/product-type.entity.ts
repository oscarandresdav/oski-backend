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
export class ProductType {
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
  name: string;

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

  @OneToMany(() => Product, (product) => product.product_type)
  products: Product[];
}
