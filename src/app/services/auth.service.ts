import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginModel, UserRegisterModel } from '../auth/models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly URL_BASE = environment.backendUrl

  constructor(private _http: HttpClient) { }

  public register(registerModel: UserRegisterModel): Observable<User> {
    const registerUrl = `${this.URL_BASE}/api/auth/sign-up`;
    return this._http.post<User>(registerUrl, registerModel);
  }

  public login(loginModel: UserLoginModel): Observable<User> {
    const loginUrl = `${this.URL_BASE}/api/auth/sign-in`;
    return this._http.post<User>(loginUrl, loginModel);
  }
}
