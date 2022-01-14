import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _URL: string = environment.baseURL + 'resume/';

  constructor(private _http: HttpClient) { }

  getOne(resumeId: string) {
    return this._http.get<any>(this._URL + resumeId);
  }

}
