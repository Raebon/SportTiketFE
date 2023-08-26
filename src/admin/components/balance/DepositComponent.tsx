import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../shared/components/ui/card';
import { DepositForm } from './DepositForm';
import { useUserWalletQuery } from '../../api/queries/user/getUserWalletQuery';

interface DepositComponentProps {}

export const DepositComponent: FC<DepositComponentProps> = ({}) => {
  const {data,error, isLoading} = useUserWalletQuery()
  if(error || isLoading) return null //vymyslet lepší řešení
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between"><span>
          
          Vložit peníze
          </span>
          <p className="text-sm">
         <small className="text-gray-500"> Aktuální zůstatek: </small>
          {data?.data.balance} Kč
          </p>
          </CardTitle>
        <CardDescription>Zadejte částku, kterou chcete připsat na účet</CardDescription>
      </CardHeader>
      <CardContent >
        <DepositForm walletId={data?.data.id!}/>
      </CardContent>
    </Card>
  );
};
