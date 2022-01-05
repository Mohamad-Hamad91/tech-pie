import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SseService {

    constructor(private eventEmitter: EventEmitter2) { }

    private events = new Subject<MessageEvent>();
    private ids: [];

    addEvent(event, id?: string) {
        // this.events.next(event);
        this.eventEmitter.emit(id, event.data);
    }


    sendEvents(): Observable<MessageEvent> {
        return this.events.asObservable();
    }

}
