import { AxiosResponse } from 'axios';
import api from '../../lib/auth-interceptors';
import { service } from '../service';

export interface AuthResponse {
  expiresIn: number;
  lastLoginDate: Date;
  token: string;
}
export class AuthService {
  async login(body: { userName: string; password: string }): Promise<AuthResponse> {
    try {
      const response: AxiosResponse<any> = await api.post(`/auth/login`, body);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  public isLogged(): boolean {
    const token = service.token.getLocalAccessToken() ? true : false;
    return token;
  }
}
