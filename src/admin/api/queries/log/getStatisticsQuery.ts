import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { GetResult } from '../../interface';
import { StatisticsResponse } from '../../../../shared/service/log/interfaces';

export const statisticsKeyPrefix = 'statistics';
export const getStatisticsQueryKey = () => [statisticsKeyPrefix];

export const getStatisticsSetup = () => {
  return service.log.getStatistics();
};

export const useStatisticsQuery = (): UseQueryResult<GetResult<StatisticsResponse>> => {
  return useQuery(getStatisticsQueryKey(), () => getStatisticsSetup());
};
