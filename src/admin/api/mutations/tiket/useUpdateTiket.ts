import { useMutation, useQueryClient } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { TiketFilter, UpdateTiket } from '../../../../shared/service/tiket/interfaces';
import { getTiketListQueryKey } from '../../queries/tiket/getTiketListQuery';
import { toast } from '../../../../shared/components/ui/use-toast';

export const useUpdateTiketMutation = (filters: TiketFilter) => {
  const queryClient = useQueryClient();

  return useMutation((value: UpdateTiket) => service.tiket.update(value), {
    onSuccess: () => {
      toast({
        title: 'Vaše akce byla úspěšná',
        description: 'Tiket byl aktualizován'
      });
      queryClient.invalidateQueries(getTiketListQueryKey(filters));
    },
    onError() {
      toast({
        variant: 'destructive',
        title: 'Vaše akce byla neúspěšná',
        description: 'Při aktualizaci tiketu nastala chyba'
      });
    }
  });
};
