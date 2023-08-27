import { FC } from 'react';
import { BalanceHistoryComponents } from '../../components/balance/BalanceHistoryComponents';
import { useUserWalletQuery } from '../../api/queries/user/getUserWalletQuery';

interface TransactionHistoryProps {}

const TransactionHistory: FC<TransactionHistoryProps> = ({}) => {
  const { data, isLoading, isError } = useUserWalletQuery();
  if (isLoading || isError) return null;
  return <BalanceHistoryComponents wallet={data!.data} />;
};

export default TransactionHistory;
