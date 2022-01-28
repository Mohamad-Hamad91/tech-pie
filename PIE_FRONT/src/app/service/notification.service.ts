import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _URL: string = environment.baseURL + 'notification/';

  constructor(private _http: HttpClient) { }

  getFroUser(userId: string) {
    return this._http.get<any>(this._URL + userId);
  }

  markAsSeen(notifId: string) {
    return this._http.put<any>(this._URL + notifId, {});
  }

}
