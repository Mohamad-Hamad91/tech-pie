import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/users.schema';
import { OfferStatus } from 'src/utils/constants/offer-status.const';
import { ROLE } from 'src/utils/constants/role.const';

export type OfferDocument = Offer & Document;

@Schema()
export class Offer {

    id: mongoose.ObjectId;

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
    employerType?: ROLE.USER | ROLE.COMPANY;

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

    @Prop()
    status?: OfferStatus = OfferStatus.IN_PROGRESS;

}

export const OfferSchema = SchemaFactory.createForClass(Offer);