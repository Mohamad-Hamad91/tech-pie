import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QueryDto } from '../search/search.query';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  _URL: string = environment.baseURL + 'search';

  constructor(private _http: HttpClient) { }

  search(data: QueryDto) {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     params = params.set(key, data[key]);
  //   }
    return this._http.post<any>(this._URL, data);
  }

}
