import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../shared/service/service';
import { TTiket } from '../../../shared/service/tiket/interface';
import { List } from '../../../shared/interfaces';

export const tiketListKeyPrefix = 'tiket-list';
export const getTiketListQueryKey = () => [tiketListKeyPrefix];

export const getTiketListSetup = () => {
  return service.tiket.getList();
};

export const useTiketListQuery = (): UseQueryResult<List<TTiket>> => {
  return useQuery(getTiketListQueryKey(), () => getTiketListSetup());
};
