import { IsIn, IsOptional, IsString } from 'class-validator';
import { Skill } from 'src/utils/constants/skill';
import { SkillExpertLevel } from 'src/utils/constants/skillExpertLevel';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

export class UserSkillDto {
  
  @IsIn(Enum2Array.transform(SkillExpertLevel))
  @IsOptional()
  expertLevel: SkillExpertLevel = SkillExpertLevel.Beginner;

  // @IsIn(Enum2Array.transform(Skill))
  @IsString()
  @IsOptional()
  value: Skill | string;
}
