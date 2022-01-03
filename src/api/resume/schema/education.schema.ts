
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { City } from 'src/utils/constants/countries';
import { Degree } from 'src/utils/constants/degree';
import { School } from 'src/utils/constants/school';

export type EducationDocument = Education & Document;

@Schema()
export class Education {
  @Prop()
  school: School | string = School.Damascus_University;

  @Prop()
  Degree: Degree | string = Degree.Software_Engineering;

  @Prop()
  startDate: Date = new Date();

  @Prop({ type: mongoose.Schema.Types.Date })
  endDate: Date | 'Present' = 'Present';

  @Prop()
  city: City = City.Damascus;

  @Prop()
  description: string = '';
}

export const EducationSchema = SchemaFactory.createForClass(Education);