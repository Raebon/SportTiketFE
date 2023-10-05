import { Settings } from 'lucide-react';
import { FC, useState } from 'react';
import { buttonVariants } from '../../../../../shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../../../../../shared/components/ui/dialog';
import { EventLinkTable } from './EventLinkTable';
import { EventLink, StorageKey, setLocalStorage } from '../utils';

interface DialogComponentProps {
  data: EventLink[];
  localStorageKey: StorageKey;
}

export const SettingEventLinkDialogComponent: FC<DialogComponentProps> = ({
  data,
  localStorageKey
}) => {
  const [linkData, setLinkData] = useState<EventLink[]>(data);
  const updatedData = (e: EventLink[]) => {
    setLinkData(e);
    setLocalStorage(e, localStorageKey);
  };
  return (
    <Dialog>
      <DialogTrigger type="button" className={buttonVariants({ variant: 'outline' })}>
        <div className="flex gap-2 items-center">
          <Settings className="w-4" />
          <span>Nastavení zásobníku</span>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl">
        <DialogHeader>
          <DialogTitle>Nastavení zásobníku eventů</DialogTitle>
          <DialogDescription>
            Slouží ke spárování url eventů z tipsportu a fortuny. Bude fungovat jen na události, kde
            máte zaručeného vítěze. Dá se vsadit pouze na 1 0 2
          </DialogDescription>
        </DialogHeader>
        <EventLinkTable data={linkData} updatedData={updatedData} />
      </DialogContent>
    </Dialog>
  );
};
