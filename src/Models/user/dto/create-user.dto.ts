import { IsEmail, MinLength, MaxLength, IsObject } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(128)
  password: string;

  name: string;

  @IsObject()
  monthlyInc?: Record<string, number>;
  
  emgfund?: number = 0;

  savings?: number = 0;
}