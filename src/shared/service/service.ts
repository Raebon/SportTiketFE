import { ArbitrageService } from './arbitrage/arbitrage-service';
import { AuthService } from './auth/auth-service';
import { LogService } from './log/log-service';
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
  private _log;
  private _arbitrage;
  constructor() {
    this._auth = new AuthService();
    this._tiket = new TiketService();
    this._notification = new NotificationService();
    this._token = new TokenService();
    this._user = new UserService();
    this._log = new LogService();
    this._arbitrage = new ArbitrageService();
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

  get log(): LogService {
    return this._log;
  }

  get user(): UserService {
    return this._user;
  }
  get arbitrage(): ArbitrageService {
    return this._arbitrage;
  }
}

export const service = new Service();
