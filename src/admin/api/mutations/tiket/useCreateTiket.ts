import { useMutation, useQueryClient } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { CreateTiketDto } from '../../../../shared/service/tiket/interfaces';
import { getTiketListQueryKey } from '../../queries/tiket/getTiketListQuery';
import { toast } from '../../../../shared/components/ui/use-toast';

export const useCreateTiketMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((value: CreateTiketDto) => service.tiket.create(value), {
    onSuccess: () => {
      toast({
        title: 'Vaše akce byla úspěšná',
        description: 'Tiket byl založen'
      });
      queryClient.invalidateQueries(getTiketListQueryKey());
    },
    onError() {
      toast({
        variant: 'destructive',
        title: 'Vaše akce byla neúspěšná',
        description: 'Při založení tikenu nastala chyba'
      });
    }
  });
};
