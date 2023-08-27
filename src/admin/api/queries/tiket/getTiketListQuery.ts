import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { TTiket } from '../../../../shared/service/tiket/interfaces';
import { GetResult } from '../../interface';

export const tiketListKeyPrefix = 'tiket-list';
export const getTiketListQueryKey = () => [tiketListKeyPrefix];

export const getTiketListSetup = () => {
  return service.tiket.getList();
};

export const useTiketListQuery = (): UseQueryResult<GetResult<TTiket[]>> => {
  return useQuery(getTiketListQueryKey(), () => getTiketListSetup());
};
