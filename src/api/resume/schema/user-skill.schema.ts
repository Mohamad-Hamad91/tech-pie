import { Skill } from 'src/utils/constants/skill';
import { SkillExpertLevel } from 'src/utils/constants/skillExpertLevel';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserSkillDocument = UserSkill & Document;

@Schema()
export class UserSkill {
  @Prop()
  expertLevel: SkillExpertLevel = SkillExpertLevel.Beginner;

  @Prop()
  value: Skill | string = Skill.UNSPECIFIED;
}

export const UserSkillSchema = SchemaFactory.createForClass(UserSkill);