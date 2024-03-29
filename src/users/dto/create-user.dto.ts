import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(16)
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MaxLength(32)
  @IsNotEmpty()
  readonly password: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
