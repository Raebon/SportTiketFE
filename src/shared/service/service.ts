import { AuthService } from './auth/auth-service';
import { NotificationService } from './notification/notification-service';
import { TiketService } from './tiket/tiket-service';
import { TokenService } from './token/token-service';
import { UserService } from './user/user-service';

class Service {
  private _auth;
  private _tiket;
  private _notification;
  private _token;
  private _user;
  constructor() {
    this._auth = new AuthService();
    this._tiket = new TiketService();
    this._notification = new NotificationService();
    this._token = new TokenService();
    this._user = new UserService();
  }
  get auth(): AuthService {
    return this._auth;
  }

  get tiket(): TiketService {
    return this._tiket;
  }

  get notification(): NotificationService {
    return this._notification;
  }

  get token(): TokenService {
    return this._token;
  }

  get user(): UserService {
    return this._user;
  }
}

export const service = new Service();
