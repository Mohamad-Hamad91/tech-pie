import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReferencesDocument = References & Document;

@Schema()
export class References {
  @Prop()
  name: string = '';

  @Prop()
  phone: string = '';

  @Prop()
  email: string = '';

  @Prop()
  company: string = '';
}

export const ReferencesSchema = SchemaFactory.createForClass(References);