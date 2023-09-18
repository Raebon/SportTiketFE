import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import {
  ArbitrageData,
  ArbitrageLinksParams
} from '../../../../shared/service/arbitrage/interfaces';

export const tennisKeyPrefix = 'arbitrage-tennis';
export const getTennisQueryKey = () => [tennisKeyPrefix];

export const getTennisSetup = (params: ArbitrageLinksParams) => {
  return service.arbitrage.getTennis(params);
};

export const useTennisQuery = (params: ArbitrageLinksParams): UseQueryResult<ArbitrageData> => {
  if (!params.fortuna || !params.tipsport) {
    return useQuery(getTennisQueryKey(), () => []);
  }
  return useQuery(getTennisQueryKey(), () => getTennisSetup(params), {
    refetchOnWindowFocus: false,
    enabled: false
  });
};
