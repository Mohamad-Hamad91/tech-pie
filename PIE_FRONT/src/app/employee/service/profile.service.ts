import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmpProfileDto } from '../emp-profile/emp-profile.dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _URL = environment.baseURL + 'resume/';

  constructor(private _http: HttpClient) { }

  getByUserId(id: string): Observable<EmpProfileDto> {
    return this._http.get<EmpProfileDto>(this._URL + 'user/' + id);
  }

  createResume(data: EmpProfileDto): Observable<EmpProfileDto> {
    return this._http.post<EmpProfileDto>(this._URL, data);
  }

  updateResume(data: EmpProfileDto, id: string): Observable<EmpProfileDto> {
    return this._http.put<EmpProfileDto>(this._URL + id, data);
  }

}
