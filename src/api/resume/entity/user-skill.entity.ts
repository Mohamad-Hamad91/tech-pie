import { Skill } from 'src/utils/constants/skill';
import { SkillExpertLevel } from 'src/utils/constants/skillExpertLevel';
import { Column } from 'typeorm';

export class UserSkill {
  @Column()
  expertLevel: SkillExpertLevel = SkillExpertLevel.Beginner;

  @Column()
  value: Skill | string = Skill.UNSPECIFIED;
}
