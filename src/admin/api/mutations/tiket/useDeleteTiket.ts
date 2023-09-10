import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '../../../../shared/components/ui/use-toast';
import { service } from '../../../../shared/service/service';
import { getTiketListQueryKey } from '../../queries/tiket/getTiketListQuery';
import { DeleteTiket, TiketFilter } from '../../../../shared/service/tiket/interfaces';

export const useDeleteTiketMutation = (filters: TiketFilter) => {
  const queryClient = useQueryClient();

  return useMutation(
    (payload: DeleteTiket) => service.tiket.delete(payload.tiketId, payload.bet, payload.status),
    {
      onSuccess: () => {
        toast({
          title: 'Vaše akce byla úspěšná',
          description: 'Tiket byl odstraněn'
        });
        queryClient.invalidateQueries(getTiketListQueryKey(filters));
      },
      onError() {
        toast({
          variant: 'destructive',
          title: 'Vaše akce byla neúspěšná',
          description: 'Při odstranění tiketu nastala chyba'
        });
      }
    }
  );
};
