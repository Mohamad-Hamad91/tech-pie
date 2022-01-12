import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class ProjectDto {
  @IsNotEmpty()
  title: string;

  link?: string;

  description: string;

  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;
}
