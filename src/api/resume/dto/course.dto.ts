import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CourseDto {

  @IsNotEmpty()
  name: string;

  @IsOptional()
  institution: string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  endDate: Date;

  @IsOptional()
  link: string;

  @IsOptional()
  description: string;
}
