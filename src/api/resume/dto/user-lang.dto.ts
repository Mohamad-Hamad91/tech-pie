import { IsIn } from 'class-validator';
import { Language } from 'src/utils/constants/lang';
import { LanguageLevel } from 'src/utils/constants/langLevel';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

export class UserLangDto {
  @IsIn(Enum2Array.transform(Language))
  value: Language = Language.Arabic;

  @IsIn(Enum2Array.transform(LanguageLevel))
  level: LanguageLevel = LanguageLevel.Native_Speaker;
}
