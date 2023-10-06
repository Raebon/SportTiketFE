import { FC, useState } from 'react';
import { SettingEventLinkDialogComponent } from './components/SettingEventLinkDialogComponent';
import { Button } from '../../../../shared/components/ui/button';
import { LoaderEventManagentArgs, LocalStorageEnum, getLocalStorage } from './utils';
import { Loader2 } from 'lucide-react';
import { Switch } from '../../../../shared/components/ui/switch';
import { Label } from '../../../../shared/components/ui/label';

interface LoaderEventManagementProps {
  onClick(e: LoaderEventManagentArgs): void;
  isLoading: boolean;
  localStorageKey:LocalStorageEnum
}

export const LoaderEventManagement: FC<LoaderEventManagementProps> = ({
  onClick,
  isLoading,
  localStorageKey
}) => {
  const [isTodayChecked, setIsTodayChecked] = useState<boolean>(false);
  const handleOnClick = () => {
    const data = getLocalStorage(localStorageKey);
    onClick({
      items: data,
      isTodayChecked
    });
  };

  const onCheckedChange = (e: boolean) => setIsTodayChecked(e);
  return (
    <div className="flex gap-2">
      <SettingEventLinkDialogComponent
        data={getLocalStorage(localStorageKey)}
        localStorageKey={localStorageKey}
      />
      <Button type="submit" onClick={handleOnClick} disabled={isLoading} className="min-w-[136px]">
        {isLoading ? <Loader2 className="animate-spin mx-auto" /> : 'Spustit zásobník'}
      </Button>
      <div className="flex items-center space-x-2">
        <Switch id="mode" checked={isTodayChecked} onCheckedChange={onCheckedChange} />
        <Label htmlFor="mode">Vyhledat jen dnešní zápasy</Label>
      </div>
    </div>
  );
};
