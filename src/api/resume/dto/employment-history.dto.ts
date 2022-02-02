import { Type } from 'class-transformer';
import { IsDate, IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { City } from 'src/utils/constants/countries';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

export class EmploymentHistoryDto {

  @IsOptional()
  jobTitle: string;

  @IsOptional()
  Employer: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  startDate: Date = new Date();

  @Type(() => Date)
  @IsOptional()
  endDate: Date | 'Present' = 'Present';

  @IsIn(Enum2Array.transform(City))
  @IsOptional()
  city: City = City.Damascus;

  @IsOptional()
  description: string;
}
