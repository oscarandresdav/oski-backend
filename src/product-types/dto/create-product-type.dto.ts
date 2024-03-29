import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductTypeDto {
  @IsString()
  @MaxLength(45)
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  readonly sort: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
