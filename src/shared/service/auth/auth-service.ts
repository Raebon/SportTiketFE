export class AuthService {
  public login() {
    return localStorage.setItem('accessToken', new Date().toDateString());
  }

  public logout() {
    return localStorage.removeItem('accessToken');
  }

  public isLogged(): boolean {
    const token = localStorage.getItem('accessToken') ? true : false;
    return token;
  }
}
