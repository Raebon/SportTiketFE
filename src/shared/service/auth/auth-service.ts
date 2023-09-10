import { AxiosResponse } from 'axios';
import api from '../../lib/api-interceptors';
import { service } from '../service';
import { ICreateUser } from './interfaces';

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
  async signUp(body: ICreateUser): Promise<AuthResponse> {
    try {
      const response: AxiosResponse<any> = await api.post(`/auth/sign-up`, body);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  async isEmailValid(email: string) {
    try {
      const response: AxiosResponse<any> = await api.get(`/auth/is-email-valid`, {
        params: { email: email }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async isUserNameValid(userName: string) {
    try {
      const response: AxiosResponse<any> = await api.get(`/auth/is-username-valid`, {
        params: { userName: userName }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  logout() {
    service.token.removeTokens();
  }
  //je potřeba?
  public isLogged(): boolean {
    const token = service.token.getLocalAccessToken() ? true : false;
    return token;
  }
}
