import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsOptional, IsPhoneNumber, MinLength, ValidateNested } from "class-validator";
import { PortofolioDto } from "./portofolio.dto";
import { UserCompanyDto } from "./user.dto";

export class CompanyDto {

    _id?: string;

    @IsEmail()
    @ApiProperty()
    @IsOptional()
    email?: string;

    @IsPhoneNumber()
    @ApiProperty()
    phone?: string;

    @ApiProperty()
    @MinLength(3)
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsOptional()
    website?: string;

    @ApiProperty()
    logo?: string;

    @ApiProperty()
    address?: string;

    @ApiProperty()
    city?: string;

    @ApiProperty()
    description?: string;

    @ApiProperty()
    empBenifits?: string;

    @ApiProperty()
    compSize?: string;

    @ApiProperty()
    aboutImg?: string;

    @ApiProperty()
    aboutContent?: string;

    @ApiProperty()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => PortofolioDto)
    portofolio?: PortofolioDto[];

    @ApiProperty()
    user: UserCompanyDto | string;

    @ApiProperty()
    contactPerson?: UserCompanyDto | string;

}