import { Type } from 'class-transformer';
import { IsDate, IsIn, IsString } from 'class-validator';
import { City } from 'src/utils/constants/countries';
import { Degree } from 'src/utils/constants/degree';
import { School } from 'src/utils/constants/school';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

export class EducationDto {
  // @IsIn(Enum2Array.transform(School))
  @IsString()
  school: School | string;

  // @IsIn(Enum2Array.transform(Degree))
  @IsString()
  Degree: Degree | string;

  @IsDate()
  @Type(() => Date)
  startDate: Date = new Date();
  @Type(() => Date)
  endDate: Date | 'Present' = 'Present';

  @IsIn(Enum2Array.transform(City))
  city: City = City.Damascus;

  description: string = '';
}
