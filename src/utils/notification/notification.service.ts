import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NOTIFICATION_STATUS } from '../constants/notification-status.const';
import { NotificationDto } from './notification.dto';
import { Notification, NotificationDocument } from './notification.schema';

@Injectable()
export class NotificationService {

    constructor(@InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>) { }

    async getForUser(id: string) {
        return this.notificationModel.find({ user: id }).sort('-date').exec();
    }

    async add(user: string, notification: NotificationDto) {
        notification.date = new Date();
        notification.status = NOTIFICATION_STATUS.UNSEEN;
        notification.user = user;
        const model = new this.notificationModel(notification);
        return await model.save();
    }

    async markAsSeen(id: string) {
        await this.notificationModel.findByIdAndUpdate(id, { status: NOTIFICATION_STATUS.SEEN });
    }

}
