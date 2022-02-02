import { IsOptional } from "class-validator";

export class LinkDto {
  @IsOptional()
  label: string;
  @IsOptional()
  value: string;
}
