import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductTypeDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly sort: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
