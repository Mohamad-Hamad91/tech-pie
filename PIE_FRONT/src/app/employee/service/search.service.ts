import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QueryDto } from '../search-company/search-query.dto';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  _URL: string = environment.baseURL + 'search-company';

  search(data: QueryDto) {
    return this._http.post<any>(this._URL, data);
  }

}
