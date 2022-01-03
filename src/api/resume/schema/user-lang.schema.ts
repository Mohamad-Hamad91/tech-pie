import { Language } from 'src/utils/constants/lang';
import { LanguageLevel } from 'src/utils/constants/langLevel';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserLangDocument = UserLang & Document;

@Schema()
export class UserLang {
  constructor(lang) {
    this.value = lang?.value;
    this.level = lang?.level;
  }

  @Prop()
  value: Language = Language.Arabic;

  @Prop()
  level: LanguageLevel = LanguageLevel.Native_Speaker;
}

export const UserLangSchema = SchemaFactory.createForClass(UserLang);