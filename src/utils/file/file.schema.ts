import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = MyFile & Document;

@Schema()
export class MyFile {

  @Prop()
 filename: string;

  @Prop()
  originalname: string;

  @Prop()
  mimetype: string;

  @Prop()
  url: string;

  @Prop()
  size: number;

  @Prop()
  isPrivate: boolean;

  @Prop()
  isLocal: string;
  
}

export const FileSchema = SchemaFactory.createForClass(MyFile);