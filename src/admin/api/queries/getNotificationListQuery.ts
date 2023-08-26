import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../shared/service/service';
import { List } from '../../../shared/interfaces';
import { INotification } from '../../../shared/service/notification/interface';

export const notificationListKeyPrefix = 'notification-list';
export const getNotificationListQueryKey = () => [notificationListKeyPrefix];

export const getNotificationListSetup = () => {
  return service.notification.getList();
};

export const useNotificationQuery = (): UseQueryResult<List<INotification>> => {
  return useQuery(getNotificationListQueryKey(), () => getNotificationListSetup(), {
    refetchInterval: 30 * 1000
  });
};
