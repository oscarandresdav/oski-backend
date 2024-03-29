import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { Brand } from 'src/brands/entities/brand.entity';
import { Category } from 'src/categories/entities/category.entity';
import { IceRate } from 'src/ice-rates/entities/ice-rate.entity';
import { IvaRate } from 'src/iva-rates/entities/iva-rate.entity';
import { MeasuringUnit } from 'src/measuring-units/entities/measuring-unit.entity';
import { ProductType } from 'src/product-types/entities/product-type.entity';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  readonly main_code: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly aux_code: string;

  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly detail: string;

  @IsNumber()
  readonly stock: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly minimum_stock: number;

  @IsNumber()
  readonly cost: number;

  @IsNumber()
  readonly price1: number;

  @IsNumber()
  readonly percentage1: number;

  @IsNumber()
  readonly pvp1: number;

  @IsNumber()
  @IsOptional()
  readonly price2: number;

  @IsNumber()
  @IsOptional()
  readonly percentage2: number;

  @IsNumber()
  @IsOptional()
  readonly pvp2: number;

  @IsNumber()
  @IsOptional()
  readonly price3: number;

  @IsNumber()
  @IsOptional()
  readonly percentage3: number;

  @IsNumber()
  @IsOptional()
  readonly pvp3: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;

  @IsString()
  @IsOptional()
  readonly category: Category;

  @IsString()
  @IsOptional()
  readonly brand: Brand;

  @IsString()
  @IsOptional()
  readonly ice_rate: IceRate;

  @IsString()
  readonly iva_rate: IvaRate;

  @IsString()
  @IsOptional()
  readonly measuring_unit: MeasuringUnit;

  @IsString()
  readonly product_type: ProductType;
}
