import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../../shared/components/ui/table';
import { IWalletLog } from '../../../shared/service/log/interfaces';
import { formatDatetime } from '../../../shared/lib/datetime-format';
import { WalletLogEnum } from '../../../shared/enums';

interface BalanceHistoryTableProps {
  data: Array<IWalletLog>;
}

const translatedTypes = new Map([
  [WalletLogEnum.deposit, 'Vklad na účet'],
  [WalletLogEnum.bet, 'Vsazená částka'],
  [WalletLogEnum.withdraw, 'Výplata'],
  [WalletLogEnum.win, 'Výhra']
]);

export const BalanceHistoryTable: FC<BalanceHistoryTableProps> = ({ data }) => {
  const getTransactionType = (type: WalletLogEnum) => {
    return translatedTypes.has(type) ? translatedTypes.get(type) : 'Neznámý stav';
  };
  return (
    <Table>
      <TableCaption>Výpis posledních transakcí</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Datum a čas</TableHead>
          <TableHead className="w-[350px]">ID</TableHead>
          <TableHead>Typ</TableHead>
          <TableHead>Částka</TableHead>
          <TableHead className="text-right">Zůstatek</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{formatDatetime(item.createdAt)}</TableCell>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{getTransactionType(item.type)}</TableCell>
              <TableCell>{item.updatedBalance - item.currentBalance} Kč</TableCell>
              <TableCell className="text-right">{item.updatedBalance}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
