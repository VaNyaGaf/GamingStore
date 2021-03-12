import { Injectable } from '@angular/core';
import { TokenPaylod } from '../models/token-paylod.interface';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor() { }

  public setToken(rawToken: string): void {
    localStorage.setItem('token', rawToken);
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  }

  public getRawToken(): string {
    return localStorage.getItem('token');
  }

  public isExpired(): boolean {
    const payload = this.getDecodedPayload();
    
    if (!payload) {
      return false;
    }

    return new Date() >= payload.exp
  }

  private getDecodedPayload(): TokenPaylod {
    const rawToken = this.getRawToken();
    
    if (!rawToken) {
      return null;
    }
  
    const encodedPayload = rawToken.split('.')[1];
    const decodedString = atob(encodedPayload);
    return JSON.parse(decodedString, this.parseDate);
  }

  private parseDate(key, value) {
    if (key === 'exp') {
      return new Date(value * 1000)
    }

    return value;
  }
}
