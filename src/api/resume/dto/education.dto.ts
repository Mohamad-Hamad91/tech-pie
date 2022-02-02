import { Type } from 'class-transformer';
import { IsDate, IsIn, IsOptional, IsString } from 'class-validator';
import { City } from 'src/utils/constants/countries';
import { Degree } from 'src/utils/constants/degree';
import { School } from 'src/utils/constants/school';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

export class EducationDto {
  // @IsIn(Enum2Array.transform(School))
  @IsString()
  @IsOptional()
  school: School | string;

  // @IsIn(Enum2Array.transform(Degree))
  @IsString()
  @IsOptional()
  Degree: Degree | string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  startDate: Date = new Date();

  @Type(() => Date)
  @IsOptional()
  endDate: Date | 'Present' = 'Present';

  @IsIn(Enum2Array.transform(City))
  @IsOptional()
  city: City = City.Damascus;

  @IsOptional()
  description: string = '';
}
