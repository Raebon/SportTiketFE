import { FC } from 'react';
import { useUserWalletQuery } from '../../api/queries/user/getUserWalletQuery';
import { MyAccountCard } from '../my-account/MyAccountCard';
import CashoutForm from './CashoutForm';

interface CashoutComponentProps {}

const CashoutComponent: FC<CashoutComponentProps> = ({}) => {
  const { data, error, isLoading } = useUserWalletQuery();
  if (error || isLoading) return null; //vymyslet lepší řešení
  return (
    <MyAccountCard
      contentClassName="flex w-full max-w-sm space-x-2"
      title={'Vybrat peníze'}
      description="Zadejte částku, kterou chcete vybrat z účtu"
      balance={data?.data.balance!}
    >
      <CashoutForm walletId={data?.data.id!} />
    </MyAccountCard>
  );
};

export default CashoutComponent;
