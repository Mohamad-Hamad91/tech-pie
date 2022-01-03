import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    BadGatewayException,
    CallHandler,
    HttpException,
} from '@nestjs/common';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MailService } from '../mail/mail.service';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {

    constructor(private mailSerrvice: MailService) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                catchError((err: any, caught: Observable<any>): ObservableInput<any> => {
                    if(err.status == 500) {
                        this.mailSerrvice.sendErrorReport(err?.message, err?.stack);
                        return throwError(() => new Error(err));
                    } else {
                        throw new HttpException(err?.response, err?.status);
                    }
                    
                }),
            );
    }
}
