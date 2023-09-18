import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import {
  ArbitrageData,
  ArbitrageLinksParams
} from '../../../../shared/service/arbitrage/interfaces';

export const footbalKeyPrefix = 'arbitrage-footbal';
export const getFootbalQueryKey = () => [footbalKeyPrefix];

export const getFootbalSetup = (params: ArbitrageLinksParams) => {
  return service.arbitrage.getFootbal(params);
};

export const useFootbalQuery = (params: ArbitrageLinksParams): UseQueryResult<ArbitrageData> => {
  if (!params.fortuna || !params.tipsport) {
    return useQuery(getFootbalQueryKey(), () => []);
  }
  return useQuery(getFootbalQueryKey(), () => getFootbalSetup(params), {
    refetchOnWindowFocus: false,
    enabled: false
  });
};
