import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDto } from 'src/app/model/comp-profile.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompProfileService {

  private _URL: string = environment.baseURL + 'company/';

  constructor(private _http: HttpClient) { }

  getMyProfile(): Observable<CompanyDto> {
    return this._http.get<CompanyDto>(this._URL + 'my-profile/');
  }

  create(data: FormData): Observable<any> {
    return this._http.post<any>(this._URL, data);
  }

  update(profileId: string, data: FormData): Observable<any> {
    return this._http.put<CompanyDto>(this._URL + profileId, data,
      {
        responseType: 'json',
        reportProgress: true,
        observe: 'events'
      });
  }


}
