import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { MyFile } from 'src/utils/file/file.schema';

export type PortofolioDocument = Portofolio & Document;

@Schema()
export class Portofolio {

    @Prop()
    value?: string;

    @Prop()
    label?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MyFile' })
    img?: MyFile;

}

export const PortofolioSchema = SchemaFactory.createForClass(Portofolio);