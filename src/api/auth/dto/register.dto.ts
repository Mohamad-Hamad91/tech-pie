import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { ROLE } from "src/utils/constants/role.const";

export class RegisterDto {

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'Password Weak, it must have a one number, Capital, small and a special char!' })
    @ApiProperty()
    password: string;

    userType?: ROLE.USER | ROLE.COMPANY;

}