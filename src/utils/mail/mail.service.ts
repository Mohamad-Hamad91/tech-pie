import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { UserMailDto } from './dto/user.dto';

@Injectable()
export class MailService {

    constructor(private mailerService: MailerService) { }


    async sendUserConfirmation(user: UserMailDto, token: string) {
        const url = `example.com/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            // from: '"Support Team" <support@example.com>',
            subject: 'Welcome to Nice App! Confirm your Email',
            template: './confirmation',
            context: {
                name: user.name,
                url,
            },
        });
    }


    async sendErrorReport(message: string, stack: any) {

        await this.mailerService.sendMail({
            to: 'ibrahim.ad.dandan@gmail.com',
            // from: '"Support Team" <support@example.com>',
            subject: 'Error Report',
            template: './error-template',
            context: {
                message,
                stack,
            },
        });
    }


    async sendOfferToEmployee(offer: any) {

        await this.mailerService.sendMail({
            to: offer.user.email,
            // from: '"Support Team" <support@example.com>',
            subject: 'Job Offer',
            template: './offer-template',
            context: { ...offer },
        });
    }

    async sendRejectReasonToEmployer(offer: any) {

        await this.mailerService.sendMail({
            to: offer.employer.email,
            // from: '"Support Team" <support@example.com>',
            subject: 'Job Offer Rejected!',
            template: './reject-offer-template',
            context: { ...offer },
        });
    }

}
