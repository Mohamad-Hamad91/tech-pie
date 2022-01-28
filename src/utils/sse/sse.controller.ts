import { Controller, Get, Logger, Res, Response, Sse, MessageEvent, Query, Req, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { interval, map, Observable, Subject } from 'rxjs';
import { FileService } from '../file/file.service';
import { SseQueryDto } from './query.dto';
// import { MessageEvent } from './message.model';
import { SseService } from './sse.service';

@Controller({
    version: '1'
})
export class SseController {

    private logger = new Logger(SseController.name);
    constructor(private readonly sseService: SseService, private eventEmitter: EventEmitter2) { }

    @Sse('sse')
    sse(@Query() sseQuery: SseQueryDto): Observable<MessageEvent> {
        this.logger.log('id: ' + sseQuery.id);
        // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
        // setInterval(() => {
        //     this.logger.log('added');
        //     this.sseService.addEvent({ data: { data: 'hello' } }, '1');
        // }, 5000);
        // return this.sseService.sendEvents();

        const subject$ = new Subject();
        this.eventEmitter.on(sseQuery.id, data => {
            subject$.next(data);
        });
        // this.eventEmitter.on('event.broadcastiong', data)
        return subject$.pipe(
            map((data: MessageEvent): MessageEvent => ({ data })),
        );
    }
}
