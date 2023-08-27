import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { GetResult } from '../../interface';
import { IWalletLog } from '../../../../shared/service/log/interfaces';

export const walletLogsKeyPrefix = 'wallet-logs';
export const getWalletLogsQueryKey = () => [walletLogsKeyPrefix];

export const getWalletLogsSetup = (walletId: string) => {
  console.log(walletId);
  return service.log.getWalletLogs(walletId);
};

export const useWalletLogsQuery = (
  walletId: string
): UseQueryResult<GetResult<Array<IWalletLog>>> => {
  return useQuery(getWalletLogsQueryKey(), () => getWalletLogsSetup(walletId), {
    refetchOnMount: false
  });
};
