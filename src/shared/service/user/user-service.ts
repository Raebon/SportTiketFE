import { AxiosResponse } from 'axios';
import api from '../../lib/api-interceptors';
import { IBalanceUpdateRequest, IUser, IWallet } from './interface';

export class UserService {
  public async getUsers() {
    try {
      const response: AxiosResponse<IUser[]> = await api.get(`/user/list`, {});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  public async getCurrentUserDetail() {
    try {
      const response: AxiosResponse<IUser> = await api.get(`/user/current-user-detail`, {});
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

  public async walletDepositOrCashout(body: IBalanceUpdateRequest) {
    try {
      const response: AxiosResponse<IWallet> = await api.post(`/user/wallet-deposit`, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
