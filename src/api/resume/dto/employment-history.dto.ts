import { IsDate, IsIn, IsNotEmpty } from 'class-validator';
import { City } from 'src/utils/constants/countries';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

export class EmploymentHistoryDto {
  @IsNotEmpty()
  jobTitle: string = '';

  @IsNotEmpty()
  Employer: string = '';

  @IsDate()
  startDate: Date = new Date();

  endDate: Date | 'Present' = 'Present';

  @IsIn(Enum2Array.transform(City))
  city: City = City.Damascus;

  description: string = '';
}
