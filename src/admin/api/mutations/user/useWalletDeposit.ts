import { useMutation, useQueryClient } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { IBalanceUpdateRequest } from '../../../../shared/service/user/interface';
import { getWalletLogsQueryKey } from '../../queries/log/getWalletLogsQuery';
import { getUserWalletQueryKey } from '../../queries/user/getUserWalletQuery';

export const useWalletDepositOrCashoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((value: IBalanceUpdateRequest) => service.user.walletDepositOrCashout(value), {
    onSuccess: () => {
      queryClient.invalidateQueries(getWalletLogsQueryKey());
      queryClient.invalidateQueries(getUserWalletQueryKey());
    }
  });
};
