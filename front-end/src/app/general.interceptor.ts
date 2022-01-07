import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GeneralInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    let tokenizedReq: any;
    if (token && token.trim())
      tokenizedReq = request.clone({
        setHeaders: { Authorization: `Bearer ${token}`, },
      });
    else tokenizedReq = request.clone();
    return new Observable((observer) => {
      next.handle(tokenizedReq).subscribe((res) => {
        if (res instanceof HttpResponse)
          observer.next(res);
      },
        (err: HttpErrorResponse) => {
          debugger;
          if (err.error instanceof ErrorEvent) {
          } else {
            this.toastr.error(err.error.message, 'ERROR!', {
              closeButton: true,
              timeOut: 50000,
              easeTime: 1000
            });
          }
          observer.error(err);
        });
    });
  }

}
