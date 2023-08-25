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
import { TTiket, TTopTiket, TopTicket } from '../../../shared/service/tiket/interface';
import { CheckTiketButton } from './CheckTiketButton';
import { DeleteTiketButton } from './DeleteTiketButton';
import { getStatusText } from './utils';

interface TiketCardComponentProps {
  item: TTiket | TTopTiket;
}

export const TiketCardComponent: FC<TiketCardComponentProps> = ({ item }) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'not-evaluated':
        return 'default';
      case 'victory':
        return 'success';
      case 'defeat':
        return 'destructive';
      default:
        'default';
    }
  };

  function isTTopTicket(obj: TTiket | TTopTiket): obj is TTopTiket {
    return obj instanceof TopTicket;
  }

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
          <p className="text-end">{item.totalRate}</p>
          <p className="text-gray-400">Vklad:</p>
          <p className="text-end">{item.deposit} Kč</p>
          <p className="text-gray-400">Možná výhra:</p>
          <p className="text-end">{Math.ceil(item.totalRate * item.deposit * 100) / 100} Kč</p>
          {isTTopTicket(item) && (
            <>
              <p className="text-gray-400">Hráč</p>
              <p className="text-end">{item.username}</p>
            </>
          )}
        </div>
      </CardContent>
      {!isTTopTicket(item) && (
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
