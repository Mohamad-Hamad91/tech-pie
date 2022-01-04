import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SseService {

    private events = new Subject<MessageEvent>();

    addEvent(event) {
        this.events.next(event);
    }

    sendEvents() : Observable<MessageEvent> {
        return this.events.asObservable();
    }

}
