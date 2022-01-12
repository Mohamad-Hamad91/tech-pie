import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  private _URL = environment.baseURL + 'constants/';

  constructor(private _http: HttpClient) { }

  getCities() {
    return this._http.get<any>(this._URL + 'city');
  }

  getNationalities() {
    return this._http.get<any>(this._URL + 'nationality');
  }

  getArmyStatus() {
    return this._http.get<any>(this._URL + 'army');
  }

  getWorkType() {
    return this._http.get<any>(this._URL + 'work-type');
  }

  getSkills() {
    return this._http.get<any>(this._URL + 'skill');
  }

  getLanguages() {
    return this._http.get<any>(this._URL + 'language');
  }

}
