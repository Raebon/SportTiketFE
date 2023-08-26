import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { IWallet } from '../../../../shared/service/user/interface';
import { GetResult } from '../../interface';

export const userWalletKeyPrefix = 'user-wallet';
export const getUserWalletQueryKey = () => [userWalletKeyPrefix];

export const getUserWalletSetup = async (): Promise<IWallet> => {
  return service.user.getUserWalletDetail();
};

export const useUserWalletQuery = (): UseQueryResult<GetResult<IWallet>> => {
  return useQuery(getUserWalletQueryKey(), () => getUserWalletSetup());
};
