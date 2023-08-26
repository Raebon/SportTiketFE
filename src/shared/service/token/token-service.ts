export class TokenService {
  public getLocalRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  public getLocalAccessToken() {
    return localStorage.getItem('accessToken');
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

  public removeTokens() {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
  }
}
