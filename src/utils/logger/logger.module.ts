import { Module } from '@nestjs/common';
import { MailModule } from '../mail/mail.module';
import { MailService } from '../mail/mail.service';
import { ErrorsInterceptor } from './errors.interceptor';
import { MyLogger } from './my-logger';

@Module({
    imports: [MailModule],
    providers: [
        MyLogger,
        MailService,
        ErrorsInterceptor
    ],
    exports: [
        MyLogger,
        ErrorsInterceptor
    ]
})
export class LoggerModule { }
