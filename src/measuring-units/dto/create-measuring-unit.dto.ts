import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMeasuringUnitDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(45)
  @MinLength(1)
  @IsOptional()
  readonly symbol: string;

  @IsNumber()
  readonly sort: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
