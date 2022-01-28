import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './service/auth.service';
import { identifierModuleUrl } from '@angular/compiler';
import { SseService } from './service/sse.service';
import { MessageService } from 'primeng-lts/api';

const EventSource: any = window['EventSource'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  baseURL = environment.baseURL;

  constructor(private sseService: SseService, private _authService: AuthService) {

  }

  ngOnInit() {
    if (!this.sseService.evtSource)
      this.sseService.init();
    this.sseService.notifications.subscribe(message => {
      // debugger;
      // this.toastr.info(message, '', {
      //   closeButton: true,
      //   timeOut: 50000,
      //   easeTime: 1000
      // });
    });
  }

}
