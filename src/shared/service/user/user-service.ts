import { AxiosResponse } from 'axios';
import api from '../../lib/auth-interceptors';
import { IUser, IWallet } from './interface';

export class UserService {
  public async getCurrentUserDetail() {
    try {
      const response: AxiosResponse<IUser> = await api.get(`/user/current-user-detail`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getUserWalletDetail() {
    try {
      const response: AxiosResponse<IWallet> = await api.get(`/user/get-wallet`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
