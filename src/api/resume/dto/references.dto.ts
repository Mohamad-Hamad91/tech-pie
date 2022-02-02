import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

export class ReferencesDto {

  @IsOptional()
  name: string;

  @IsPhoneNumber()
  @IsOptional()
  phone: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  company: string;
}
