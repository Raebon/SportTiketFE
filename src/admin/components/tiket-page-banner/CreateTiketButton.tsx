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
import { CreateTiketForm } from './CreateTiketForm';

interface CreateTiketButtonProps {}

const CreateTiketButton: FC<CreateTiketButtonProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const closeSheet = (e: boolean) => setOpen(!e);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={buttonVariants({ variant: 'default' })}>Vytvořit tiket</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Vytvořit tiket</SheetTitle>
          <SheetDescription>Vyplňte formulář a stiskněte tlačítko "Vytvořit"</SheetDescription>
        </SheetHeader>
        <CreateTiketForm closeSheet={closeSheet} />
      </SheetContent>
    </Sheet>
  );
};

export default CreateTiketButton;
