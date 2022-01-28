import { ApiProperty } from "@nestjs/swagger";
import { NOTIFICATION_STATUS } from "../constants/notification-status.const";
import { NOTIFICATION_TYPE } from "../constants/notification-type.const";

export class NotificationDto {
    _id?: string;

    @ApiProperty()
    label: string;

    @ApiProperty()
    status?: NOTIFICATION_STATUS = NOTIFICATION_STATUS.UNSEEN;

    @ApiProperty()
    type: NOTIFICATION_TYPE;

    @ApiProperty()
    user: any;

    date?: Date = new Date();

}