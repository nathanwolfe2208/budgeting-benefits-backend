import { IsEmail, IsObject } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  email?: string;

  name?: string;

  @IsObject()
  monthlyInc?: Record<string, number>;
}