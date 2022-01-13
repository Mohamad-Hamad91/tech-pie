import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class BaseQueryInputDto {

    @IsNumber()
    @Type(() => Number)
    @ApiProperty({ type: () => Number })
    @IsOptional()
    readonly pageSize: number = 25;

    @IsInt()
    @Type(() => Number)
    @ApiProperty({ type: () => Number })
    @IsOptional()
    readonly pageNumber: number = 1;

    @IsString()
    @ApiProperty()
    @IsOptional()
    readonly sortBy: string;

    @Type(() => Boolean)
    @IsBoolean()
    @ApiProperty({ type: () => Boolean })
    @IsOptional()
    readonly sortOrder?: boolean = true;

    @ValidateNested({ each: true })
    @Type(() => Criteria)
    @ApiProperty({ type: () => [Criteria] })
    @IsOptional()
    criteria?: Criteria[];

    formatCriteria() {
        const result = this.criteria.reduce((acc, field) => {
            let temp: any = {};
            temp['$' + field.operation] = field.value;
            acc[field.key] = temp;
            return acc;
        }, {});
        return result;
    }
}

export class Criteria {
    @IsString()
    key: string;
    
    value: any;
    
    @IsString()
    operation: string;
}