import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { TiketFilter, TTiket } from '../../../../shared/service/tiket/interfaces';
import { GetResult } from '../../interface';

export const tiketListKeyPrefix = 'tiket-list';
export const getTiketListQueryKey = (filter: TiketFilter) => [tiketListKeyPrefix, filter];

export const getTiketListSetup = (filter: TiketFilter) => {
  return service.tiket.getList(filter);
};

export const useTiketListQuery = (filter: TiketFilter): UseQueryResult<GetResult<TTiket[]>> => {
  return useQuery(getTiketListQueryKey(filter), () => getTiketListSetup(filter));
};
