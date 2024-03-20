import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsBoolean()
  readonly status: boolean;
}
