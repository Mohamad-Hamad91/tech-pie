import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _URL: string = environment.baseURL + 'resume/';

  private _compURL: string = environment.baseURL + 'company/';

  constructor(private _http: HttpClient) { }

  getOne(resumeId: string) {
    return this._http.get<any>(this._URL + resumeId);
  }

  getOneComp(profileId: string) {
    return this._http.get<any>(this._compURL + profileId);
  }

  getByUserId(id: string) {
    return this._http.get<any>(this._URL + 'user/' + id);
  }

  getByCompId(id: string) {
    return this._http.get<any>(this._compURL + 'user/' + id);
  }

}
