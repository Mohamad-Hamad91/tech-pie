import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _URL: string = environment.baseURL + 'file/';

  constructor(private _http: HttpClient) { }

  remove(id: string) {
    return this._http.delete(this._URL + id);
  }

  upload(data: FormData) {
    return this._http.post<any>(this._URL, data, {
      // body: data,
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({ 'ngsw-bypass': '', responseType: 'text', })
    });
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // addFile(data: FormData) {
  //   let url = 'http://localhost:3001/api/file'
  //   return this.getServerSentEvent(url , data);
  //   // const evtSource = new EventSource(url);
  //   // evtSource.onmessage = ({ data }) => {
  //   //   console.log('connection send data');
  //   //   const message = JSON.parse(data);
  //   //   console.log(message);
  //   // }

  //   // evtSource.onerror = (e) => {
  //   //   console.log('connection error');
  //   //   console.log(e);
  //   //   evtSource.close();
  //   // }

  //   // evtSource.onopen = (e) => {
  //   //   console.log('connection open');
  //   //   console.log(e);
  //   // } //
  //   // let p: number = 5;
  //   // return new Observable((observer) => { observer.next(5) });
  // }

  // private getServerSentEvent(url: string, data: FormData): Observable<number> {
  //   return new Observable((observer) => {
  //     const eventSource = this.sseService.getEventSourceWithPost(url, data);
  //     // Launch query
  //     eventSource.stream();
  //     // on answer from message listener 
  //     eventSource.onmessage = (event) => {
  //       this.zone.run(() => {
  //         observer.next(event.progress);
  //       });
  //     };
  //     eventSource.onerror = (error) => {
  //       this.zone.run(() => {
  //         observer.error(error);
  //       });
  //     };
  //   });
  // }

  // public closeConnection(eventSource?: SSE): void {
  //   this.sseService.closeEventSource();
  // }

}
