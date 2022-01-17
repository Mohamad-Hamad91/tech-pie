import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsOptional, IsPhoneNumber } from "class-validator";
import { WorkType } from "src/utils/constants/workType";

export class OfferDto {
    _id?: string;

    @IsEmail()
    @ApiProperty()
    @IsOptional()
    compEmail?: string;

    @IsPhoneNumber()
    @IsOptional()
    @ApiProperty()
    compPhone?: string;

    @IsOptional()
    @ApiProperty()
    compName?: string;

    @ApiProperty()
    user?: any;

    @ApiProperty()
    employer?: any;

    @ApiProperty()
    employerType?: 'USER' | 'COMPANY';

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    minPrice?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    maxPrice?: number;

    @ApiProperty()
    @IsOptional()
    position?: string;

    @ApiProperty()
    @IsOptional()
    workType?: WorkType;

    @ApiProperty()
    @IsOptional()
    workPlace?: string;

    @ApiProperty()
    @IsOptional()
    message?: string;

    @IsOptional()
    status?: 'APPROVED' | 'REJECTED' | null;
}