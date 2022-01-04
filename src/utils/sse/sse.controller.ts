import { Controller, Get, Logger, Res, Response, Sse, MessageEvent } from '@nestjs/common';
import { interval, map, Observable, Subject } from 'rxjs';
// import { MessageEvent } from './message.model';
import { SseService } from './sse.service';

@Controller()
export class SseController {

    private logger = new Logger(SseController.name);
    constructor(private readonly sseService: SseService) { }

    @Sse('notification')
    sse(): Observable<MessageEvent> {
        // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
        setInterval(() => {
            this.logger.log('added');
            this.sseService.addEvent({ data: { data: 'hello' } });
        }, 5000);
        return this.sseService.sendEvents();
    }

    // @Sse()
    // sse(): Observable<MessageEvent> {
    //     this.logger.log('notification sse opened');
    // setInterval(() => {
    //     this.logger.log('added');
    //     this.sseService.addEvent({ data: 'hello' });
    // }, 500);
    // return this.sseService.sendEvents();

    // const subject$ = new Subject();


    // subject$.next({data: 'hello'});

    // this.logger.log('notification sse opened');
    // return subject$.pipe(
    //     map((data: MessageEvent): MessageEvent => ({ data })),
    //   );

    // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));

    // return interval(1000).pipe(() => {
    //     const s = new Subject<MessageEvent>();
    //     s.next({ data: '{ hello }' } as MessageEvent);
    //     this.logger.log('sent');

    //     return s.asObservable();
    // });
    // }

}
