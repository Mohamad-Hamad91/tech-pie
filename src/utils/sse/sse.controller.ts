import { Controller, Get, Logger, Res, Response, Sse, MessageEvent, Query } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { interval, map, Observable, Subject } from 'rxjs';
import { SseQueryDto } from './query.dto';
// import { MessageEvent } from './message.model';
import { SseService } from './sse.service';

@Controller()
export class SseController {

    private logger = new Logger(SseController.name);
    constructor(private readonly sseService: SseService, private eventEmitter: EventEmitter2) { }

    @Sse('notification')
    sse(@Query() sseQuery: SseQueryDto): Observable<MessageEvent> {
        this.logger.log('id: ' + sseQuery.id);
        // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
        setInterval(() => {
            this.logger.log('added');
            this.sseService.addEvent({ data: { data: 'hello' } }, '1');
        }, 5000);
        // return this.sseService.sendEvents();

        const subject$ = new Subject();
        this.eventEmitter.on(sseQuery.id, data => {
            subject$.next(data);
        });
        return subject$.pipe(
            map((data: MessageEvent): MessageEvent => ({ data })),
        );
    }

}
