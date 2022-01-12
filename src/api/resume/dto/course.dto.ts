import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CourseDto {
  @IsNotEmpty()
  name: string;

  institution: string;

  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  link: string;

  description: string;
}
