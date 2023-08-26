import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../shared/components/ui/card';
import { useUserWalletQuery } from '../../api/queries/user/getUserWalletQuery';
import CashoutForm from './CashoutForm';

interface CashoutComponentProps {}

const CashoutComponent: FC<CashoutComponentProps> = ({}) => {
  const {data,error, isLoading} = useUserWalletQuery()
  if(error || isLoading) return null //vymyslet lepší řešení
  return (
    <Card className="w-full">
      <CardHeader>
      <CardTitle className="flex justify-between"><span>
          
          Vybrat peníze
          </span>
          <p className="text-sm">
         <small className="text-gray-500"> Aktuální zůstatek: </small>
          {data?.data.balance} Kč
          </p>
          </CardTitle>
        <CardDescription>Zadejte částku, kterou chcete vybrat z účtu</CardDescription>
      </CardHeader>
      <CardContent className="flex w-full max-w-sm space-x-2">
        <CashoutForm walletId={data?.data.id!}/>
      </CardContent>
    </Card>
  );
};

export default CashoutComponent;
