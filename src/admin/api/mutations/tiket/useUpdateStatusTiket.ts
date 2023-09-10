import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '../../../../shared/components/ui/use-toast';
import { service } from '../../../../shared/service/service';
import { TiketFilter, UpdateTiketStatus } from '../../../../shared/service/tiket/interfaces';
import { getTiketListQueryKey } from '../../queries/tiket/getTiketListQuery';

export const useUpdateStatusTiketMutation = (filters: TiketFilter) => {
  const queryClient = useQueryClient();

  return useMutation((value: UpdateTiketStatus) => service.tiket.updateStatus(value), {
    onSuccess: () => {
      toast({
        title: 'Vaše akce byla úspěšná',
        description: 'Status byl změnen'
      });
      queryClient.invalidateQueries(getTiketListQueryKey(filters));
    },
    onError() {
      toast({
        variant: 'destructive',
        title: 'Vaše akce byla neúspěšná',
        description: 'Při změně statusu nastala chyba'
      });
    }
  });
};
