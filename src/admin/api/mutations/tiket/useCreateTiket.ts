import { useMutation, useQueryClient } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { CreateTiket, TiketFilter } from '../../../../shared/service/tiket/interfaces';
import { getTiketListQueryKey } from '../../queries/tiket/getTiketListQuery';
import { toast } from '../../../../shared/components/ui/use-toast';

export const useCreateTiketMutation = (filter: TiketFilter) => {
  const queryClient = useQueryClient();

  return useMutation((value: CreateTiket) => service.tiket.create(value), {
    onSuccess: () => {
      toast({
        title: 'Vaše akce byla úspěšná',
        description: 'Tiket byl založen'
      });
      queryClient.invalidateQueries(getTiketListQueryKey(filter));
    },
    onError() {
      toast({
        variant: 'destructive',
        title: 'Vaše akce byla neúspěšná',
        description: 'Při založení tiketu nastala chyba'
      });
    }
  });
};
