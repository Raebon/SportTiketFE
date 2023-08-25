import { Eye } from 'lucide-react';
import { FC } from 'react';
import { Button } from '../../../shared/components/ui/button';
import { INotification } from '../../../shared/service/notification/interface';

interface NotificationListComponentProps {
  items: Array<INotification> | undefined;
}

export const NotificationListComponent: FC<NotificationListComponentProps> = ({ items }) => {
  return (
    <div className="grid gap-2">
      {items &&
        items.map((item, index) => {
          return (
            <div className="flex justify-between gap-2" key={index}>
              <p className="text-sm my-auto">{item.text}</p>
              <Button variant={'default'} size={'icon'} disabled>
                <Eye />
              </Button>
            </div>
          );
        })}
    </div>
  );
};
