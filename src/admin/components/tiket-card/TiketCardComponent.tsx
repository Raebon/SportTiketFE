import { FC } from 'react';
import { Badge } from '../../../shared/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../../shared/components/ui/card';
import { Separator } from '../../../shared/components/ui/separator';
import { formatNumber } from '../../../shared/lib/utils';
import { TTiket, TiketStatusEnum } from '../../../shared/service/tiket/interfaces';
import { CheckTiketButton } from './CheckTiketButton';
import { DeleteTiketButton } from './DeleteTiketButton';
import {EditTiketButton} from './EditTiketButton';
import { getStatusText } from './utils';

interface TiketCardComponentProps {
  tiket: TTiket;
  isPublic: boolean;
}

export const TiketCardComponent: FC<TiketCardComponentProps> = ({ tiket, isPublic }) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'not-evaluated':
        return 'default';
      case 'victory':
        return 'success';
      case 'defeat':
        return 'destructive';
      case 'cashout':
        return 'cashout';
      default:
        'default';
    }
  };

  const canCheckTiket = (aproximateEndDatetime: Date): boolean => {
    let dateNow = new Date();
    return Number(aproximateEndDatetime) >= Number(dateNow);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{tiket.name}</CardTitle>
        <Separator />
        <CardDescription>
          <Badge variant={getStatusVariant(tiket.status)}>{getStatusText(tiket.status)}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="font-bold">
        <div className="grid grid-cols-2 gap-2 text-sm min-w-[225px]">
          <p className="text-gray-400">Celkový kurz:</p>
          <p className="text-end">{tiket.rate}</p>
          <p className="text-gray-400">Vklad:</p>
          <p className="text-end">{formatNumber(tiket.bet)}</p>
          <p className="text-gray-400">Možná výhra:</p>
          <p className="text-end ">
            {tiket.status === TiketStatusEnum.cashout ? (
              <>
                <>
                  <small className="opacity-70 pr-2 line-through">
                    {formatNumber(Math.ceil(tiket.rate * tiket.bet * 100) / 100)}
                  </small>
                  {formatNumber(tiket.cashoutMoney)}
                </>
              </>
            ) : (
              <>{formatNumber(Math.ceil(tiket.rate * tiket.bet * 100) / 100)}</>
            )}
          </p>
          {isPublic && (
            <>
              <p className="text-gray-400">Hráč</p>
              <p className="text-end">{tiket.userName}</p>
            </>
          )}
        </div>
      </CardContent>
      {!isPublic && (
        <CardFooter className="flex justify-end space-x-1">
          <DeleteTiketButton id={tiket.id} name={tiket.name} />
          <CheckTiketButton tiket={tiket} disabled={canCheckTiket(tiket.approximateEndDatetime)} />
          <EditTiketButton tiket={tiket} disabled={tiket.status !== TiketStatusEnum.notEvaluated}/>
        </CardFooter>
      )}
    </Card>
  );
};
