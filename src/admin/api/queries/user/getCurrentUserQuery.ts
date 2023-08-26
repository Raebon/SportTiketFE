import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { IUser } from '../../../../shared/service/user/interface';
import { GetResult } from '../../interface';

export const currentUserKeyPrefix = 'current-user';
export const getCurrentUserQueryKey = () => [currentUserKeyPrefix];

export const getCurrentUserSetup = () => {
  return service.user.getCurrentUserDetail();
};

export const useCurrentUserQuery = (): UseQueryResult<GetResult<IUser>> => {
  return useQuery(getCurrentUserQueryKey(), () => getCurrentUserSetup(), {
    refetchOnMount: false
  });
};
