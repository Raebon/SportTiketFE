import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { GetListResult } from '../../interface';
import { IUser } from '../../../../shared/service/auth/interfaces';

export const usersKeyPrefix = 'users';
export const getUsersQueryKey = () => [usersKeyPrefix];

export const getUsersSetup = () => {
  return service.user.getUsers();
};

export const useUsersQuery = (): UseQueryResult<GetListResult<IUser[]>> => {
  return useQuery(getUsersQueryKey(), () => getUsersSetup(), {
    refetchOnMount: false
  });
};
