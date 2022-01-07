import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsAlpha,
  IsBoolean,
  IsDate,
  IsEmail,
  IsHexadecimal,
  IsIn,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { type } from 'os';
import { ArmyServiceStatus } from 'src/utils/constants/armyServiceStatus';
import { City, Country } from 'src/utils/constants/countries';
import { Nationality } from 'src/utils/constants/nationalits';
import { Shift } from 'src/utils/constants/shift';
import { WorkType } from 'src/utils/constants/workType';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';
import { CourseDto } from './course.dto';
import { EducationDto } from './education.dto';
import { EmploymentHistoryDto } from './employment-history.dto';
import { LinkDto } from './link.dto';
import { ProjectDto } from './project.dto';
import { ReferencesDto } from './references.dto';
import { UserLangDto } from './user-lang.dto';
import { UserSkillDto } from './user-skill.dto';

export class ResumeDto {
  // id: string = '';

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string = '';

  @IsAlpha()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  fName: string = '';

  @IsAlpha()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  lName: string = '';

  @ApiProperty()
  photo: string = '';

  @IsPhoneNumber()
  @ApiProperty()
  phone: string = '';

  @ApiProperty()
  @IsIn(Enum2Array.transform(Country))
  country: Country = Country.Syria;

  @ApiProperty()
  @IsIn(Enum2Array.transform(City))
  city: City = City.UNSPECIFIED;

  @ApiProperty()
  address: string = '';

  @IsDate()
  @ApiProperty()
  birthDate: Date = new Date(1990, 1, 1);

  @ApiProperty()
  @IsIn(Enum2Array.transform(Nationality))
  nationality: Nationality = Nationality.Syrian;

  @ApiProperty()
  @Type(() => Boolean)
  @IsBoolean()
  available: boolean = true;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  availableAt: Date = new Date();

  @ApiProperty()
  @IsIn(Enum2Array.transform(WorkType))
  workType: WorkType = WorkType.OTHER;

  @ApiProperty()
  @IsIn(Enum2Array.transform(Shift))
  shift: Shift = Shift.UNSPECIFIED;

  title?: string;
  
  expectedPriceMin?: number;

  expectedPriceUnit?: string;

  expectedPriceCurrency?: string;

  @ApiProperty()
  summary: string = '';

  @ApiProperty()
  hobbies: string = '';

  @ApiProperty()
  @IsIn(Enum2Array.transform(ArmyServiceStatus))
  armyServiceStatus: ArmyServiceStatus = ArmyServiceStatus.Pending_For_Study;

  @ApiProperty({type: () => [EmploymentHistoryDto]})
  @ValidateNested({ each: true })
  @Type(() => EmploymentHistoryDto)
  employmentHistory: EmploymentHistoryDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => CourseDto)
  courses: CourseDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => EducationDto)
  education: EducationDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => LinkDto)
  links: LinkDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => ProjectDto)
  projects: ProjectDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => ReferencesDto)
  references: ReferencesDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => UserLangDto)
  languages: UserLangDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => UserSkillDto)
  skills: UserSkillDto[];
}
