import { ClipboardCheck } from 'lucide-react';
import { FC, useState } from 'react';
import { buttonVariants } from '../../../shared/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../../../shared/components/ui/popover';
import { TiketStatusType } from '../../../shared/service/tiket/interfaces';
import { CheckTiketForm } from './CheckTiketForm';

interface CheckTiketPopoverProps {
  id: string;
  status: TiketStatusType;
  disabled: boolean;
}

export const CheckTiketButton: FC<CheckTiketPopoverProps> = ({ id, status, disabled }) => {
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
        <CheckTiketForm id={id} status={status} closePopover={closePopover} />
      </PopoverContent>
    </Popover>
  );
};
