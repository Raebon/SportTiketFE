import { ClipboardCheck } from 'lucide-react';
import { FC, useState } from 'react';
import { buttonVariants } from '../../../shared/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../../../shared/components/ui/popover';
import { TTiket } from '../../../shared/service/tiket/interfaces';
import { CheckTiketForm } from './CheckTiketForm';

interface CheckTiketPopoverProps {
  tiket: TTiket;
  disabled: boolean;
}

export const CheckTiketButton: FC<CheckTiketPopoverProps> = ({ disabled, tiket }) => {
  const [open, setOpen] = useState<boolean>(false);

  const closePopover = (e: boolean) => setOpen(!e);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={buttonVariants({ variant: 'default', size: 'icon' })}
        disabled={disabled}
      >
        <ClipboardCheck className="w-5" />
      </PopoverTrigger>
      <PopoverContent>
        <CheckTiketForm closePopover={closePopover} tiket={tiket} />
      </PopoverContent>
    </Popover>
  );
};
