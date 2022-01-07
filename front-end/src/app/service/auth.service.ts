import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { RegisterDto } from '../register/register.dto';
import { LoginDto, LoginResDto } from '../login/login.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseURL: string = environment.baseURL + 'auth/';

  constructor(private _http: HttpClient) { }

  public register(data: RegisterDto) {
    return this._http.post(this._baseURL + 'register', data);
  }

  public login(data: LoginDto): Observable<LoginResDto> {
    return this._http.post<LoginResDto>(this._baseURL + 'login', data);
  }

}
