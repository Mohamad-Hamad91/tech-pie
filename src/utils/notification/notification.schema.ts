import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, ObjectId } from 'mongoose';
import { User } from 'src/api/users/users.schema';
import { NOTIFICATION_STATUS } from '../constants/notification-status.const';
import { NOTIFICATION_TYPE } from '../constants/notification-type.const';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {

    _id: ObjectId;

    @Prop()
    label: string;

    @Prop()
    status: NOTIFICATION_STATUS = NOTIFICATION_STATUS.UNSEEN;

    @Prop()
    type: NOTIFICATION_TYPE;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop()
    date: Date = new Date();

}

export const NotificationSchema = SchemaFactory.createForClass(Notification);