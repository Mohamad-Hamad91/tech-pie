import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { MessageService } from 'primeng-lts/api';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  evtSource: EventSource;
  uploadEvents: Subject<any> = new Subject();
  notifications: Subject<any> = new Subject();
  private _URL = environment.baseURL;

  constructor(private toastr: MessageService, private _authService: AuthService) { }

  init() {
    this.evtSource = new EventSource(this._URL + 'sse?id=' + this._authService.getId());

    this.evtSource.onmessage = ({ data }) => {
      const message = JSON.parse(data);
      console.log(message);
      switch (message.type) {
        case 'UPLOAD':
          this.uploadEvents.next(message.data);
          break;
        default: case 'NOTIFICATION':
          this.notifications.next(message.data);
          break;
      }
      // console.log(message);

    }

    this.evtSource.onerror = (e) => {
      console.log('connection error');
      // console.log(e);
      this.evtSource.close();
    }

    this.evtSource.onopen = (e) => {
      console.log('connection open');
      // console.log(e);
    } //
  }




}
