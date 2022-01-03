import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LinkDocument = Link & Document;

@Schema()
export class Link {
  @Prop()
  label: string = '';

  @Prop()
  value: string = '';
}

export const LinkSchema = SchemaFactory.createForClass(Link);