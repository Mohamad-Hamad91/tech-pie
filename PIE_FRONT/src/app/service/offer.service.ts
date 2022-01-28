import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfferDto } from 'src/app/model/offer.dto';
import { Observable, throwError } from 'rxjs';
import { SseService } from './sse.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private _URL: string = environment.baseURL + 'offer/';

  constructor(private _http: HttpClient,
    private zone: NgZone, private sseService: SseService) { }

  add(offer: OfferDto) {
    return this._http.post<any>(this._URL, offer);
  }

  getIncomeOffers(): Observable<OfferDto[]> {
    return this._http.get<OfferDto[]>(this._URL + 'income');
  }

  getSentOffers(): Observable<OfferDto[]> {
    return this._http.get<OfferDto[]>(this._URL + 'sent');
  }

  edit(id: string, offer: OfferDto) {
    return this._http.put(this._URL + id, offer);
  }

  

}
