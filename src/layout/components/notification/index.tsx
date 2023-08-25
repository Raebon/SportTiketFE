import { Bell } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../../../shared/components/ui/popover';
import { NotificationListComponent } from './NotificationListComponent';
import { useNotificationQuery } from '../../../admin/api/queries/getNotificationListQuery';

const Index = () => {
  const { isLoading, error, data } = useNotificationQuery();
  if (isLoading) return null;
  if (error) return null;
  return (
    <Popover>
      <PopoverTrigger className="text-gray-300 hover:bg-gray-700 hover:text-white block py-2 text-base font-medium relative rounded-full px-2">
        <div className="absolute inset-x-5 inset-y-4 p-2 animate-bounce text-red-500">
          <span className="relative">
            <small>{data?.count}</small>
          </span>
        </div>
        <Bell />
      </PopoverTrigger>
      <PopoverContent>
        <NotificationListComponent items={data?.data} />
      </PopoverContent>
    </Popover>
  );
};

export default Index;
