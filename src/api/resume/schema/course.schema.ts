import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CourseDocument = Course & Document;

@Schema()
export class Course {

  @Prop()
  name: string;

  @Prop()
  institution: string;

  @Prop()
  startDate: Date = new Date();

  @Prop()
  endDate: Date = new Date();

  @Prop()
  link: string;

  @Prop()
  description: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
