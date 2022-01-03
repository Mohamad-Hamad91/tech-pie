import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class ReferencesDto {
  @IsNotEmpty()
  name: string = '';

  @IsPhoneNumber()
  phone: string = '';

  @IsEmail()
  email: string = '';

  company: string = '';
}
