import { AxiosResponse } from 'axios';
import api from '../../lib/auth-interceptors';
import {
  CreateTiket,
  CreateTiketDto,
  TTiket,
  TiketFilter,
  TiketStatusType,
  UpdateTiket,
  UpdateTiketDto,
  UpdateTiketStatus
} from './interfaces';

export class TiketService {
  public async getList(body: TiketFilter) {
    try {
      const response: AxiosResponse<Array<TTiket>> = await api.get(`/tiket/user-tikets`, {
        params: body
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async create(body: CreateTiket) {
    try {
      const request = new CreateTiketDto(body);
      return await api.post('/tiket/create', request);
    } catch (error) {
      throw error;
    }
  }

  public async delete(tiketId: string, bet: number, status: TiketStatusType) {
    try {
      return await api.delete('/tiket/delete', {
        data: {
          tiketId: tiketId,
          bet: bet,
          status: status
        }
      });
    } catch (error) {
      throw error;
    }
  }

  public async update(body: UpdateTiket) {
    try {
      const request = new UpdateTiketDto(body);
      return await api.post('/tiket/update', request);
    } catch (error) {
      throw error;
    }
  }
  public async updateStatus(body: UpdateTiketStatus) {
    try {
      const request = new UpdateTiketDto(body);
      return await api.post('/tiket/update-status', request);
    } catch (error) {
      throw error;
    }
  }
}
