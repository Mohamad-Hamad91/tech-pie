import { Language } from 'src/utils/constants/lang';
import { LanguageLevel } from 'src/utils/constants/langLevel';
import { Column } from 'typeorm';

export class UserLang {
  constructor(lang) {
    this.value = lang?.value;
    this.level = lang?.level;
  }

  @Column()
  value: Language = Language.Arabic;

  @Column()
  level: LanguageLevel = LanguageLevel.Native_Speaker;
}
