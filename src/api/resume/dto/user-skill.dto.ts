import { IsIn } from 'class-validator';
import { Skill } from 'src/utils/constants/skill';
import { SkillExpertLevel } from 'src/utils/constants/skillExpertLevel';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

export class UserSkillDto {
  @IsIn(Enum2Array.transform(SkillExpertLevel))
  expertLevel: SkillExpertLevel = SkillExpertLevel.Beginner;

  @IsIn(Enum2Array.transform(Skill))
  value: Skill | string = Skill.UNSPECIFIED;
}
