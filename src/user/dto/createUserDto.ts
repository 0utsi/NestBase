import { isEmail, isNumberString, isString } from 'class-validator';

export class CreateUserDto {
  @isString()
  name: string;
  @isEmail()
  email: string;
  @isNumberString()
  phone: string;
}
