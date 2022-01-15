import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/users.schema';

export type OfferDocument = Offer & Document;

@Schema()
export class Offer {

    @Prop()
    compEmail: string;

    @Prop()
    compPhone: string;

    @Prop()
    compName: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    employer: User;

    @Prop()
    employerType?: 'USER' | 'COMPANY';

    @Prop()
    minPrice: number;

    @Prop()
    maxPrice: number;

    @Prop()
    position: string;

    @Prop()
    workType: string;

    @Prop()
    workPlace: string;// workPlace

    @Prop()
    message: string;

}

export const OfferSchema = SchemaFactory.createForClass(Offer);