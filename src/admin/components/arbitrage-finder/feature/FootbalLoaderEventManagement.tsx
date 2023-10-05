import { FC } from 'react';
import { SettingEventLinkDialogComponent } from './components/SettingEventLinkDialogComponent';
import { Button } from '../../../../shared/components/ui/button';
import { EventLink, LocalStorageEnum, getLocalStorage } from './utils';
import { Loader2 } from 'lucide-react';

interface SaveTennisEventLinkProps {
  onClick(e: EventLink[]): void;
  isLoading: boolean;
}

export const FootbalLoaderEventManagement: FC<SaveTennisEventLinkProps> = ({
  onClick,
  isLoading
}) => {
  const handleOnClick = () => {
    const data = getLocalStorage(LocalStorageEnum.localStorageKeyFootbal);
    onClick(data);
  };
  return (
    <div className="flex gap-2">
      <SettingEventLinkDialogComponent
        data={getLocalStorage(LocalStorageEnum.localStorageKeyFootbal)}
        localStorageKey={LocalStorageEnum.localStorageKeyFootbal}
      />
      <Button type="submit" onClick={handleOnClick} disabled={isLoading} className="min-w-[136px]">
        {isLoading ? <Loader2 className="animate-spin mx-auto" /> : 'Spustit zásobník'}
      </Button>
    </div>
  );
};
