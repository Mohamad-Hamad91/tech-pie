import { IsDate, IsNotEmpty } from 'class-validator';

export class ProjectDto {
  @IsNotEmpty()
  title: string = '';

  description: string = '';

  @IsDate()
  startDate: Date = new Date();

  @IsDate()
  endDate: Date = new Date();
}
