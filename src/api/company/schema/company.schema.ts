import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/users.schema';
import { MyFile } from 'src/utils/file/file.schema';
import { Portofolio, PortofolioSchema } from './portofolio.schema';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {

    id: mongoose.ObjectId;

    @Prop()
    email?: string;

    @Prop()
    phone?: string;

    @Prop()
    name?: string;

    @Prop()
    website?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MyFile' })
    logo?: MyFile;

    @Prop()
    address?: string;

    @Prop()
    city?: string;

    @Prop()
    description?: string;

    @Prop()
    empBenifits?: string[] = [];

    @Prop()
    techStack?: string[] = [];

    @Prop()
    compSize?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MyFile' })
    aboutImg?: MyFile;

    @Prop()
    aboutContent?: string;

    @Prop({ type: [{ type: PortofolioSchema }] })
    portofolio?: Portofolio[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    contactPerson?: User;

}

export const CompanySchema = SchemaFactory.createForClass(Company);