import { AxiosResponse } from 'axios';
import api from '../../lib/auth-interceptors';
import { service } from '../service';
export class AuthService {
  async login(body: { userName: string; password: string }): Promise<string> {
    try {
      const response: AxiosResponse<any> = await api.post(`/auth/login`, body);
      return response.data.token;
    } catch (error) {
      throw error;
    }
  }

  public isLogged(): boolean {
    const token = service.token.getLocalAccessToken() ? true : false;
    return token;
  }
}
