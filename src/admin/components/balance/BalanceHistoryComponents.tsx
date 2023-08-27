import { FC } from 'react';
import { IWallet } from '../../../shared/service/user/interface';
import { useWalletLogsQuery } from '../../api/queries/log/getWalletLogsQuery';
import { MyAccountCard } from '../my-account/MyAccountCard';
import { BalanceHistoryTable } from './BalanceHistoryTable';
interface BalanceHistoryComponentsProps {
  wallet: IWallet;
}

export const BalanceHistoryComponents: FC<BalanceHistoryComponentsProps> = ({ wallet }) => {
  const { data, isError, isLoading } = useWalletLogsQuery(wallet.id);
  if (isError || isLoading) return null;
  return (
    <MyAccountCard
      title={'Historie transakcí'}
      description="Výpis historie všech výběru i vkladů"
      balance={wallet.balance}
    >
      <BalanceHistoryTable data={data?.data!} />
    </MyAccountCard>
  );
};
