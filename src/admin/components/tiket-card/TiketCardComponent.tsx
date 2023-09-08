import { Eye } from 'lucide-react';
import { FC } from 'react';
import { Badge } from '../../../shared/components/ui/badge';
import { Button } from '../../../shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../../shared/components/ui/card';
import { Separator } from '../../../shared/components/ui/separator';
import { TTiket, TiketStatusEnum } from '../../../shared/service/tiket/interfaces';
import { CheckTiketButton } from './CheckTiketButton';
import { DeleteTiketButton } from './DeleteTiketButton';
import { getStatusText } from './utils';
import { formatNumber } from '../../../shared/lib/utils';

interface TiketCardComponentProps {
  item: TTiket;
  isPublic: boolean;
}

export const TiketCardComponent: FC<TiketCardComponentProps> = ({ item, isPublic }) => {
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
        <CardTitle>{item.name}</CardTitle>
        <Separator />
        <CardDescription>
          <Badge variant={getStatusVariant(item.status)}>{getStatusText(item.status)}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="font-bold">
        <div className="grid grid-cols-2 gap-2 text-sm min-w-[225px]">
          <p className="text-gray-400">Celkový kurz:</p>
          <p className="text-end">{item.rate}</p>
          <p className="text-gray-400">Vklad:</p>
          <p className="text-end">{formatNumber(item.bet)}</p>
          <p className="text-gray-400">Možná výhra:</p>
          <p className="text-end ">
            {item.status === TiketStatusEnum.cashout ? (
              <>
                <>
                  <small className="opacity-70 pr-2 line-through">
                    {formatNumber(Math.ceil(item.rate * item.bet * 100) / 100)}
                  </small>
                  {formatNumber(item.cashoutMoney)}
                </>
              </>
            ) : (
              <>{formatNumber(Math.ceil(item.rate * item.bet * 100) / 100)}</>
            )}
          </p>
          {isPublic && (
            <>
              <p className="text-gray-400">Hráč</p>
              <p className="text-end">{item.userName}</p>
            </>
          )}
        </div>
      </CardContent>
      {!isPublic && (
        <CardFooter className="flex justify-end space-x-1">
          <DeleteTiketButton id={item.id} name={item.name} />
          <CheckTiketButton
            id={item.id}
            status={item.status}
            disabled={canCheckTiket(item.approximateEndDatetime)}
          />
          <Button type="button" variant={'default'} size={'icon'} disabled>
            <Eye />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
