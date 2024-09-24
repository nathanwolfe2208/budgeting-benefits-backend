import { IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(128)
  password: string;

  name: string;
}