import { ROLE } from "../model/roles.enum";

export class RegisterDto {
    email: string;
    password: string;
    confirmPassword: string;
    userType?: ROLE.USER | ROLE.COMPANY;
}