import { XOctagon } from 'lucide-react';
import { FC } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../../../shared/components/ui/alert-dialog';
import { buttonVariants } from '../../../shared/components/ui/button';
import { useDeleteTiketMutation } from '../../api/mutations/tiket/useDeleteTiket';

interface DeleteTiketButtonProps {
  id: string;
  name: string;
}

export const DeleteTiketButton: FC<DeleteTiketButtonProps> = ({ id, name }) => {
  const deleteTiket = useDeleteTiketMutation();
  const onConfirm = () => {
    deleteTiket.mutate(id);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonVariants({ variant: 'destructive', size: 'icon' })}>
        <XOctagon className="w-5" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Opravdu chceš odstranit "{name}"?</AlertDialogTitle>
          <AlertDialogDescription>
            Tuto akci nelze vzít zpět. Tímto bude váš tiket trvale smazán.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Zrušit</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Potvrdit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
