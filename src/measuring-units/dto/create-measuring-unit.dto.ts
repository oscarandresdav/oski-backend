import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMeasuringUnitDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly symbol: string;

  @IsNumber()
  readonly sort: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
