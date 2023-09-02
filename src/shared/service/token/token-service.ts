import { AuthResponse } from '../auth/auth-service';

export class TokenService {
  public getLocalRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  public getLocalAccessToken() {
    return localStorage.getItem('accessToken');
  }
  public getInfoToken(): AuthResponse | null {
    if (!!localStorage.getItem('info')) {
      return JSON.parse(localStorage.getItem('info') ?? '');
    }
    return null;
  }

  public updateLocalAccessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  public updateLocalRefreshToken(token: string) {
    return localStorage.setItem('refreshToken', token);
  }

  public setRefreshToken(token: string) {
    return localStorage.setItem('refreshToken', token);
  }

  public setAccessToken(token: string) {
    return localStorage.setItem('accessToken', token);
  }
  public setInfoToken(data: AuthResponse) {
    return localStorage.setItem('info', JSON.stringify(data));
  }

  public setFirstLoginModalSeenToken() {
    const date = new Date();
    return localStorage.setItem('loginModalChecked', JSON.stringify(date));
  }

  public getFirstLoginModalSeenToken(): Date {
    return localStorage.getItem('loginModalChecked')
      ? JSON.parse(localStorage.getItem('loginModalChecked')!)
      : '';
  }

  public removeTokens() {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('info');
  }
}
