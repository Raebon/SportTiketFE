import { Pencil } from 'lucide-react';
import { FC, useState } from 'react';
import { buttonVariants } from '../../../shared/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../../../shared/components/ui/sheet';
import { TTiket } from '../../../shared/service/tiket/interfaces';
import { EditTiketForm } from './EditTiketForm';

interface EditTiketButtonProps {
  tiket: TTiket;
  disabled: boolean;
}

export const EditTiketButton: FC<EditTiketButtonProps> = ({ tiket, disabled }) => {
  const [open, setOpen] = useState<boolean>(false);
  const closeSheet = (e: boolean) => setOpen(!e);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={buttonVariants({ variant: 'default', size: 'icon' })}
        disabled={disabled}
      >
        <Pencil />
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
          <SheetTitle>Editovat tiket</SheetTitle>
          <SheetDescription>Vyplňte formulář a stiskněte tlačítko "Vytvořit"</SheetDescription>
        </SheetHeader>
        <EditTiketForm closeSheet={closeSheet} tiket={tiket} />
      </SheetContent>
    </Sheet>
  );
};
