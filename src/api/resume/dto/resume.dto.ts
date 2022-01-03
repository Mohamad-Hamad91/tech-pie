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
  email: string = '';

  @IsAlpha()
  @IsNotEmpty()
  @MinLength(3)
  fName: string = '';

  @IsAlpha()
  @IsNotEmpty()
  @MinLength(3)
  lName: string = '';

  photo: string = '';

  @IsPhoneNumber()
  phone: string = '';

  @IsIn(Enum2Array.transform(Country))
  country: Country = Country.Syria;

  @IsIn(Enum2Array.transform(City))
  city: City = City.UNSPECIFIED;

  address: string = '';

  @IsDate()
  birthDate: Date = new Date(1990, 1, 1);

  @IsIn(Enum2Array.transform(Nationality))
  nationality: Nationality = Nationality.Syrian;

  @Type(() => Boolean)
  @IsBoolean()
  available: boolean = true;

  @Type(() => Date)
  @IsDate()
  availableAt: Date = new Date();

  @IsIn(Enum2Array.transform(WorkType))
  workType: WorkType = WorkType.OTHER;

  @IsIn(Enum2Array.transform(Shift))
  shift: Shift = Shift.UNSPECIFIED;

  summary: string = '';

  hobbies: string = '';

  @IsIn(Enum2Array.transform(ArmyServiceStatus))
  armyServiceStatus: ArmyServiceStatus = ArmyServiceStatus.Pending_For_Study;

  @ValidateNested({ each: true })
  @Type(() => EmploymentHistoryDto)
  employmentHistory: EmploymentHistoryDto[];

  @ValidateNested({ each: true })
  @Type(() => CourseDto)
  courses: CourseDto[];

  @ValidateNested({ each: true })
  @Type(() => EducationDto)
  education: EducationDto[];

  @ValidateNested({ each: true })
  @Type(() => LinkDto)
  links: LinkDto[];

  @ValidateNested({ each: true })
  @Type(() => ProjectDto)
  projects: ProjectDto[];

  @ValidateNested({ each: true })
  @Type(() => ReferencesDto)
  references: ReferencesDto[];

  @ValidateNested({ each: true })
  @Type(() => UserLangDto)
  languages: UserLangDto[];

  @ValidateNested({ each: true })
  @Type(() => UserSkillDto)
  skills: UserSkillDto[];
}
