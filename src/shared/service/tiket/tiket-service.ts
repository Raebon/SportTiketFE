import { AxiosResponse } from 'axios';
import { CreateTiketDto, TTiket } from './interfaces';
import api from '../../lib/auth-interceptors';

export class TiketService {
  public async getList() {
    try {
      const response: AxiosResponse<Array<TTiket>> = await api.get(`/tiket/user-tikets`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async create(body: CreateTiketDto) {
    try {
      return await api.post('/tiket/create', body);
    } catch (error) {
      throw error;
    }
  }

  public async delete(tiketId: string) {
    try {
      return await api.delete('/tiket/delete', {
        data: {
          tiketId: tiketId
        }
      });
    } catch (error) {}
  }
}
