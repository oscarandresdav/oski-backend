import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';

export class CreateProductDto {
  @IsString()
  readonly main_code: string;

  @IsString()
  @IsOptional()
  readonly aux_code: string;

  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly detail: string;

  @IsNumber()
  readonly stock: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
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
  readonly category: Category;
}
