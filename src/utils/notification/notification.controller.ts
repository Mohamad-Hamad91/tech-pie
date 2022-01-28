import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NotificationDto } from './notification.dto';
import { NotificationService } from './notification.service';

@Controller({
    path: 'notification',
    version: '1'
})
export class NotificationController {

    constructor(private notificationService: NotificationService) { }

    @Get('/:id')
    async getForUser(@Param('id') id: string) {
        return this.notificationService.getForUser(id);
    }

    @Post('/:id')
    async add(@Param('id') id: string, notification: NotificationDto) {
        return this.notificationService.add(id, notification);
    }

    @Put('/:id')
    async markAsSeen(@Param('id') id: string) {
        return this.notificationService.markAsSeen(id);
    }

}
