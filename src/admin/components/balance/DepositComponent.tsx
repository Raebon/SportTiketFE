import { FC } from 'react';
import { useUserWalletQuery } from '../../api/queries/user/getUserWalletQuery';
import { MyAccountCard } from '../my-account/MyAccountCard';
import { DepositForm } from './DepositForm';

interface DepositComponentProps {}

export const DepositComponent: FC<DepositComponentProps> = ({}) => {
  const { data, error, isLoading } = useUserWalletQuery();
  if (error || isLoading) return null; //vymyslet lepší řešení
  return (
    <MyAccountCard
      contentClassName="flex w-full max-w-sm space-x-2"
      title={'Vložit peníze'}
      description="Zadejte částku, kterou chcete připsat na účet"
      balance={data?.data.balance!}
    >
      <DepositForm walletId={data?.data.id!} />
    </MyAccountCard>
  );
};
