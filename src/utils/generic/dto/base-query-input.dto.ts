import { Type } from "class-transformer";
import { IsInt, IsNumber, IsString, ValidateNested } from "class-validator";

export class BaseQueryInputDto {

    @IsNumber()
    @Type(() => Number)
    readonly pageSize: number = 25;

    @IsInt()
    @Type(() => Number)
    readonly pageNumber: number = 1;

    @IsString()
    readonly sortBy: string;

    @Type(() => Number)
    @IsInt()
    readonly sortOrder?: number = 1;

    @ValidateNested({ each: true })
    @Type(() => Criteria)
    criteria?: Criteria[];

    formatCriteria() {
        return this.criteria.reduce((acc, field) => acc[field.key] = field.value, {});
    }
}

export class Criteria {
    @IsString()
    key: string;
    value: any;
    @IsString()
    operation: string;
}