import { AxiosResponse } from 'axios';
import api from '../../lib/auth-interceptors';
import { CreateTiketDto, TTiket, UpdateStatusTiket, UpdateTiketDto } from './interfaces';

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

  public async updateStatus(body: UpdateStatusTiket) {
    try {
      const request = new UpdateTiketDto(body);
      return await api.post('/tiket/update-status', request);
    } catch (error) {
      throw error;
    }
  }
}
