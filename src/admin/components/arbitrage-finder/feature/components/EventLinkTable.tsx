import { FC } from 'react';
import { Button } from '../../../../../shared/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../../../../shared/components/ui/table';
import AddLinkForm from './AddLinkForm';
import { EventLink } from '../utils';

interface EventLingTableProps {
  data: EventLink[];
  updatedData(e: EventLink[]): void;
}

export const EventLinkTable: FC<EventLingTableProps> = ({ data, updatedData }) => {
  const addRow = (newEventLink: EventLink) => {
    updatedData([...data, newEventLink]);
  };

  const removeRow = (eventLink: EventLink) => {
    const updatedList = data.filter(
      (item) =>
        item.fortunaLink !== eventLink.fortunaLink &&
        item.tipsportLink !== eventLink.tipsportLink &&
        item.name !== eventLink.name
    );
    updatedData(updatedList);
  };
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Název</TableHead>
            <TableHead>Tipsport link</TableHead>
            <TableHead>Fortuna link</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.tipsportLink}</TableCell>
                <TableCell>{item.fortunaLink}</TableCell>
                <TableCell className="text-right">
                  <Button variant="destructive" type="button" onClick={() => removeRow(item)}>
                    X
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <AddLinkForm addRow={addRow} />
    </>
  );
};
