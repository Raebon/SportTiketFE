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

interface BalanceHistoryTableProps {
  data: Array<IWalletLog>;
}

export const BalanceHistoryTable: FC<BalanceHistoryTableProps> = ({ data }) => {
  const getTransactionType = (currentBalance: number, updatedBalance: number) => {
    return updatedBalance - currentBalance > 0 ? 'Vklad' : 'Výběr';
  };
  return (
    <Table>
      <TableCaption>Výpis posledních transakcí</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">ID</TableHead>
          <TableHead>Typ</TableHead>
          <TableHead>Částka</TableHead>
          <TableHead className="text-right">Zůstatek</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{getTransactionType(item.currentBalance, item.updatedBalance)}</TableCell>
              <TableCell>{item.updatedBalance - item.currentBalance} Kč</TableCell>
              <TableCell className="text-right">{item.updatedBalance}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
