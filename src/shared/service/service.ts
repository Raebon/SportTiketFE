import { AuthService } from './auth/auth-service';
import { NotificationService } from './notification/notification-service';
import { TiketService } from './tiket/tiket-service';

class Service {
  private _auth;
  private _tiket;
  private _notification;
  constructor() {
    this._auth = new AuthService();
    this._tiket = new TiketService();
    this._notification = new NotificationService();
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
}

export const service = new Service();
