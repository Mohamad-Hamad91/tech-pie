import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OfferDto } from '../model/offer.dto';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private _URL: string = environment.baseURL + 'offer/';

  constructor(private _http: HttpClient) { }

  get(): Observable<OfferDto[]> {
    return this._http.get<OfferDto[]>(this._URL);
  }

  edit(id: string, offer: OfferDto) {
    return this._http.put(this._URL + id, offer);
  }

}
