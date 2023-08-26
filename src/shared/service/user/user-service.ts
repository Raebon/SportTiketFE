import { AxiosResponse } from 'axios';
import api from '../../lib/auth-interceptors';
import { IDepositRequest, IUser, IWallet } from './interface';

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
      const response: AxiosResponse<IWallet> = await api.get(`/user/wallet`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async walletDeposit(body: IDepositRequest) {
    try {
      const response: AxiosResponse<IWallet> = await api.post(`/user/wallet-deposit`, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
