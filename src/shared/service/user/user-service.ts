import { AxiosResponse } from 'axios';
import api from '../../lib/api-interceptors';
import { IBalanceUpdateRequest, IUser, IWallet } from './interface';

export class UserService {
  public async getCurrentUserDetail() {
    try {
      const response: AxiosResponse<IUser> = await api.get(`/user/current-user-detail`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getUserWalletDetail() {
    try {
      const response: AxiosResponse<IWallet> = await api.get(`/user/wallet`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async walletDepositOrCashout(body: IBalanceUpdateRequest) {
    try {
      const response: AxiosResponse<IWallet> = await api.post(`/user/wallet-deposit`, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
