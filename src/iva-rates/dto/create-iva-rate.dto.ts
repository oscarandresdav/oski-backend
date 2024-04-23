import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateIvaRateDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(3)
  @IsNotEmpty()
  readonly code: string;

  @IsNumber()
  @IsNotEmpty()
  readonly value: number;

  @IsNumber()
  @IsNotEmpty()
  readonly sort: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
