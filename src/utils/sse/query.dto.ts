import { IsString } from "class-validator";

export class SseQueryDto {

    @IsString()
    id: string;
    
    token?: string;
}