import axios, { AxiosResponse } from 'axios';
import { ArbitrageData, ArbitrageLinksParams } from './interfaces';

//const BASE_URL = 'http://localhost:4000/';

const BASE_URL = import.meta.env.VITE_ARBITRAGE_API_URL;
export class ArbitrageService {
  public async reload() {
    try {
      const response: AxiosResponse<any> = await axios.head(`${BASE_URL}arbitrage/reload`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  public async getFootbal(params: ArbitrageLinksParams) {
    try {
      const response: AxiosResponse<ArbitrageData> = await axios.get(
        `${BASE_URL}arbitrage/footbal`,
        {
          params: params
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  public async getTennis(params: ArbitrageLinksParams) {
    try {
      const response: AxiosResponse<ArbitrageData> = await axios.get(
        `${BASE_URL}arbitrage/tennis`,
        {
          params: params
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
