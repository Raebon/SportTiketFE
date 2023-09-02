import { FC, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '../../../shared/components/ui/dialog';
import { service } from '../../../shared/service/service';

interface FirstLoginTodayDialogProps {}

export const isToday = (date: Date | null | undefined) => {
  if (!date) return false;
  const parsedDate = new Date(date);
  const today = new Date();
  return (
    parsedDate.getDate() === today.getDate() &&
    parsedDate.getMonth() === today.getMonth() &&
    parsedDate.getFullYear() === today.getFullYear()
  );
};

const FirstLoginTodayDialog: FC<FirstLoginTodayDialogProps> = ({}) => {
  const lastLoginDateFromToken = service.token.getInfoToken();
  const firstLoginModalChecked = service.token.getFirstLoginModalSeenToken();

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const cond = isToday(lastLoginDateFromToken?.lastLoginDate) && !isToday(firstLoginModalChecked) || !firstLoginModalChecked
    return () => {
      if (cond) {
        setShow(true);
      }
    }
  }, []);  

  const hadleCloseModal = (e: boolean) => {
    setShow(e);
    service.token.setFirstLoginModalSeenToken();
  };

  return (
    <Dialog open={show} onOpenChange={hadleCloseModal}>
      <DialogContent className="top-[10%]">
        <DialogHeader>
          <DialogTitle>Vítejte v aplikaci</DialogTitle>
          <DialogDescription>Zde budou nějaké shrnutí atd...</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FirstLoginTodayDialog;
