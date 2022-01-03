import { IsDate, IsNotEmpty } from 'class-validator';

export class CourseDto {
  @IsNotEmpty()
  name: string = '';

  institution: string = '';

  @IsDate()
  startDate: Date = new Date();

  @IsDate()
  endDate: Date = new Date();

  link: string = '';

  description: string = '';
}
