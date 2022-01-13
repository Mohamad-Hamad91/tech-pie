import { ApiProperty } from "@nestjs/swagger";
import { BaseQueryInputDto } from "src/utils/generic/dto/base-query-input.dto";

export class SearchQueryDto extends BaseQueryInputDto {

    @ApiProperty()
    search: string;
}