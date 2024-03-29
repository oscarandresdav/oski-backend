import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MaxLength(45)
  @IsNotEmpty()
  readonly name: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
