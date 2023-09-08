import { useMutation } from '@tanstack/react-query';
import { toast } from '../../../../shared/components/ui/use-toast';
import { ICreateUser } from '../../../../shared/service/auth/interfaces';
import { service } from '../../../../shared/service/service';

export const useSignUpMutation = () => {
  return useMutation((value: ICreateUser) => service.auth.signUp(value), {
    onSuccess: () => {
      toast({
        title: 'Vaše akce byla úspěšná',
        description: 'Váš účet byl založen'
      });
    },
    onError() {
      toast({
        variant: 'destructive',
        title: 'Vaše akce byla neúspěšná',
        description: 'Při založení účtu nastala chyba'
      });
    }
  });
};
