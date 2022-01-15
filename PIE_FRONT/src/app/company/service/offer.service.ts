import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfferDto } from '../offer/offer.dto';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private _URL: string = environment.baseURL + 'offer';

  constructor(private _http: HttpClient) { }

  add(offer: OfferDto) {
    return this._http.post<any>(this._URL, offer);
  }

}
