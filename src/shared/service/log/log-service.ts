import { IWalletLog } from './interfaces';
import api from '../../lib/api-interceptors';
import { AxiosResponse } from 'axios';
export class LogService {
  public async getWalletLogs(walletId: string) {
    try {
      const response: AxiosResponse<Array<IWalletLog>> = await api.get(`/log/wallet`, {
        withCredentials: true,
        params: { walletId: walletId }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
