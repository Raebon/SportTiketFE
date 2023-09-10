import { XOctagon } from 'lucide-react';
import { FC, useContext } from 'react';
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
import { DeleteTiket, TiketStatusType } from '../../../shared/service/tiket/interfaces';
import { FiltersContext } from '../../pages/tiket-management/TiketManagement';

interface DeleteTiketButtonProps {
  id: string;
  name: string;
  bet: number;
  status: TiketStatusType;
}

export const DeleteTiketButton: FC<DeleteTiketButtonProps> = ({ id, name, bet, status }) => {
  const filters = useContext(FiltersContext);
  const deleteTiket = useDeleteTiketMutation(filters);
  const onConfirm = () => {
    const payload: DeleteTiket = {
      tiketId: id,
      bet: bet,
      status: status
    };
    deleteTiket.mutate(payload);
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
