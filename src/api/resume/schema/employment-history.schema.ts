import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { City } from 'src/utils/constants/countries';

export type EmploymentHistoryDocument = EmploymentHistory & Document;

@Schema()
export class EmploymentHistory {

  @Prop()
  jobTitle: string;

  @Prop()
  Employer: string;

  @Prop()
  startDate: Date = new Date();

  @Prop({ type: mongoose.Schema.Types.Date })
  endDate: Date | 'Present' = 'Present';

  @Prop()
  city: City = City.Damascus;

  @Prop()
  description: string;
}

export const EmploymentHistorySchema = SchemaFactory.createForClass(EmploymentHistory);
