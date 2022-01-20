import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfferDto } from 'src/app/model/offer.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private _URL: string = environment.baseURL + 'offer/';

  constructor(private _http: HttpClient) { }

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
