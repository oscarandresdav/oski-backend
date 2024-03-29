import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateIceRateDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(6)
  @IsNotEmpty()
  readonly code: string;

  @IsString()
  @IsOptional()
  @MaxLength(4)
  @MinLength(1)
  readonly ad_valorem: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
