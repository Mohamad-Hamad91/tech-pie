import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

const EventSource: any = window['EventSource'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  baseURL = environment.baseURL;

  constructor(private toastr: ToastrService) {
    const evtSource = new EventSource('http://localhost:3001/api/' + 'notification?id=1');
    evtSource.onmessage = ({ data }) => {
      console.log('connection send data');
      const message = JSON.parse(data);
      console.log(message);
      this.toastr.success(message.data);
    }

    evtSource.onerror = (e) => {
      console.log('connection error');
      console.log(e);
      evtSource.close();
    }

    evtSource.onopen = (e) => {
      console.log('connection open');
      console.log(e);
    } //

  }

  ngOnInit() {


  }

}
