import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
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

  _id?: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  email?: string;

  @MinLength(3)
  @ApiProperty()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsOptional()
  photo?: string;

  @IsPhoneNumber()
  @ApiProperty()
  @IsOptional()
  phone?: string;

  @ApiProperty()
  @IsOptional()
  @IsIn(Enum2Array.transform(City))
  city?: City;

  @ApiProperty()
  @IsOptional()
  address?: string;

  @ApiProperty({ type: () => ['Male', 'Female'] })
  @IsOptional()
  gender?: 'Male' | 'Female';

  // @IsDate()
  @IsOptional()
  @ApiProperty()
  @Type(() => Date)
  birthDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsIn(Enum2Array.transform(Nationality))
  nationality?: Nationality = Nationality.Syrian;

  @ApiProperty()
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  available?: boolean = true;

  @ApiProperty()
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  availableAt?: Date = new Date();

  @ApiProperty()
  @IsOptional()
  // @IsIn(Enum2Array.transform(WorkType))
  // @ValidateNested({ each: true })
  @IsArray()
  workType?: WorkType[];

  @ApiProperty()
  @IsOptional()
  @IsIn(Enum2Array.transform(Shift))
  shift?: Shift = Shift.UNSPECIFIED;

  @ApiProperty()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  expectedPriceMin?: number;

  @ApiProperty()
  @IsOptional()
  expectedPriceUnit?: string;

  @ApiProperty()
  @IsOptional()
  expectedPriceCurrency?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  totalExperience?: number;

  @ApiProperty()
  @IsOptional()
  summary?: string;

  @ApiProperty()
  @IsOptional()
  hobbies?: string;

  @ApiProperty()
  @IsOptional()
  @IsIn(Enum2Array.transform(ArmyServiceStatus))
  armyServiceStatus?: ArmyServiceStatus;

  @ApiProperty({ type: () => [EmploymentHistoryDto] })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => EmploymentHistoryDto)
  employmentHistory?: EmploymentHistoryDto[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CourseDto)
  courses?: CourseDto[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => EducationDto)
  education?: EducationDto[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => LinkDto)
  links?: LinkDto[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProjectDto)
  projects?: ProjectDto[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ReferencesDto)
  references?: ReferencesDto[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UserLangDto)
  languages?: UserLangDto[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UserSkillDto)
  skills?: UserSkillDto[];

}
