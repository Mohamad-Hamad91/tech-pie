import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmpProfileDto } from '../emp-profile/dto/emp-profile.dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _URL = environment.baseURL + 'resume/';

  constructor(private _http: HttpClient) { }

  getMyProfile(): Observable<EmpProfileDto> {
    return this._http.get<EmpProfileDto>(this._URL + 'my-profile/');
  }

  createResume(data: FormData): Observable<EmpProfileDto> {
    return this._http.post<EmpProfileDto>(this._URL, data);
  }

  updateResume(data: FormData, id: string): Observable<EmpProfileDto> {
    return this._http.put<EmpProfileDto>(this._URL + id, data);
  }

}
