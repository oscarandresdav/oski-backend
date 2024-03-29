import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @MaxLength(45)
  @IsNotEmpty()
  readonly name: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
