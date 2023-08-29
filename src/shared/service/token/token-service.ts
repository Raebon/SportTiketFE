import { AuthResponse } from '../auth/auth-service';

export class TokenService {
  public getLocalRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  public getLocalAccessToken() {
    return localStorage.getItem('accessToken');
  }
  public getInfoToken(): AuthResponse {
    return JSON.parse(localStorage.getItem('info') ?? '');
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

  public clearFirstLoginModalSeenToken() {
    return localStorage.removeItem('loginModalChecked');
  }

  public removeTokens() {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('info');
  }
}
