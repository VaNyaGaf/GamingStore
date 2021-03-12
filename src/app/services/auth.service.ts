import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginModel, UserRegisterModel } from '../auth/models';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { User } from '../models';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _subject$ = new BehaviorSubject(this._isLoggedIn());
  private readonly URL_BASE = environment.backendUrl

  constructor(
    private _http: HttpClient,
    private _tokenService: JwtTokenService) { }

  public register(registerModel: UserRegisterModel): Observable<{token: string, user: User}> {
    const registerUrl = `${this.URL_BASE}/api/auth/sign-up`;
    return this._http.post<{token: string, user: User}>(registerUrl, registerModel).pipe(
      tap(response => this._tokenService.setToken(response.token))
    );
  }

  public login(loginModel: UserLoginModel): Observable<{token: string, user: User}> {
    const loginUrl = `${this.URL_BASE}/api/auth/sign-in`;
    return this._http.post<{token: string, user: User}>(loginUrl, loginModel).pipe(
      tap(response => {
        this._tokenService.setToken(response.token);
        this._subject$.next(true);
      })
    );
  }

  public isLoggedIn(): Observable<boolean> {
    return this._subject$.asObservable();
  }

  private _isLoggedIn(): boolean {
    return !this._tokenService.isExpired();
  }

  public logout() {
    this._tokenService.removeToken();
    this._subject$.next(false);
  }
}

