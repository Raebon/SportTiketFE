import { useMutation, useQueryClient } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { IBalanceUpdateRequest } from '../../../../shared/service/user/interface';
import { getWalletLogsQueryKey } from '../../queries/log/getWalletLogsQuery';
import { getUserWalletQueryKey } from '../../queries/user/getUserWalletQuery';
import { toast } from '../../../../shared/components/ui/use-toast';

export const useWalletDepositOrCashoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((value: IBalanceUpdateRequest) => service.user.walletDepositOrCashout(value), {
    onSuccess: (_, variables) => {
      toast({
        title: `Úspěšně jste vybral částku ${variables.amount} Kč`
      });
      queryClient.invalidateQueries(getWalletLogsQueryKey());
      queryClient.invalidateQueries(getUserWalletQueryKey());
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: `Při výběru částky se akce nezdařila`
      });
    }
  });
};
