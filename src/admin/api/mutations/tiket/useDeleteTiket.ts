import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '../../../../shared/components/ui/use-toast';
import { service } from '../../../../shared/service/service';
import { getTiketListQueryKey } from '../../queries/tiket/getTiketListQuery';

export const useDeleteTiketMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((tiketId: string) => service.tiket.delete(tiketId), {
    onSuccess: () => {
      toast({
        title: 'Vaše akce byla úspěšná',
        description: 'Tiket byl odstraněn'
      });
      queryClient.invalidateQueries(getTiketListQueryKey());
    },
    onError() {
      toast({
        variant: 'destructive',
        title: 'Vaše akce byla neúspěšná',
        description: 'Při odstranění tiketu nastala chyba'
      });
    }
  });
};
