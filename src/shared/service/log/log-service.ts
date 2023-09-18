import { IWalletLog, StatisticsResponse } from './interfaces';
import api from '../../lib/api-interceptors';
import { AxiosResponse } from 'axios';
export class LogService {
  public async getWalletLogs(walletId: string) {
    try {
      const response: AxiosResponse<Array<IWalletLog>> = await api.get(`/log/wallet`, {
        params: { walletId: walletId }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getStatistics() {
    try {
      const response: AxiosResponse<StatisticsResponse> = await api.get(`/log/statistics`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
