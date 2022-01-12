import { ArmyServiceStatus } from 'src/utils/constants/armyServiceStatus';
import { City, Country } from 'src/utils/constants/countries';
import { Nationality } from 'src/utils/constants/nationalits';
import { Shift } from 'src/utils/constants/shift';
import { WorkType } from 'src/utils/constants/workType';


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { MyFile } from 'src/utils/file/file.schema';
import { EmploymentHistory, EmploymentHistorySchema } from './employment-history.schema';
import { Course, CourseSchema } from './course.schema';
import { Education, EducationSchema } from './education.schema';
import { Link, LinkSchema } from './link.schema';
import { UserSkill, UserSkillSchema } from './user-skill.schema';
import { UserLang, UserLangSchema } from './user-lang.schema';
import { References, ReferencesSchema } from './reference.schema';
import { Project, ProjectSchema } from './project.schema';
import { User } from 'src/api/users/users.schema';

export type ResumeDocument = Resume & Document;

@Schema()
export class Resume {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MyFile' })
  photo: MyFile;

  @Prop()
  phone: string;

  @Prop()
  city: City;

  @Prop()
  address: string;

  @Prop()
  gender?: 'Male' | 'Female';

  @Prop()
  birthDate: Date;

  @Prop()
  nationality: Nationality = Nationality.Syrian;

  @Prop()
  available: boolean = true;

  @Prop()
  availableAt: Date = new Date();

  @Prop()
  workType: WorkType[];

  @Prop()
  shift: Shift = Shift.UNSPECIFIED;

  @Prop()
  title?: string;

  @Prop()
  expectedPriceMin?: number;

  @Prop()
  expectedPriceUnit?: string;

  @Prop()
  expectedPriceCurrency?: string;

  @Prop()
  totalExperience?: number;

  @Prop()
  summary: string;

  @Prop()
  hobbies: string;

  @Prop()
  armyServiceStatus: ArmyServiceStatus;

  @Prop({ type: [{ type: EmploymentHistorySchema }] })
  employmentHistory: EmploymentHistory[];

  @Prop({ type: [{ type: CourseSchema }] })
  courses: Course[];

  @Prop({ type: [{ type: EducationSchema }] })
  education: Education[];

  @Prop({ type: [{ type: LinkSchema }] })
  links: Link[];

  @Prop({ type: [{ type: ProjectSchema }] })
  projects: Project[];

  @Prop({ type: [{ type: ReferencesSchema }] })
  references: References[];

  @Prop({ type: [{ type: UserLangSchema }] })
  languages: UserLang[];

  @Prop({ type: [{ type: UserSkillSchema }] })
  skills: UserSkill[];
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
