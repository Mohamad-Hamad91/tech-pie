import { IsDate, IsIn } from 'class-validator';
import { City } from 'src/utils/constants/countries';
import { Degree } from 'src/utils/constants/degree';
import { School } from 'src/utils/constants/school';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

export class EducationDto {
  @IsIn(Enum2Array.transform(School))
  school: School | string = School.Damascus_University;

  @IsIn(Enum2Array.transform(Degree))
  Degree: Degree | string = Degree.Software_Engineering;

  @IsDate()
  startDate: Date = new Date();

  endDate: Date | 'Present' = 'Present';

  @IsIn(Enum2Array.transform(City))
  city: City = City.Damascus;

  description: string = '';
}
