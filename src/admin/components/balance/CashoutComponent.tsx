import { FC } from 'react';
import { Button } from '../../../shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../shared/components/ui/card';
import { Input } from '../../../shared/components/ui/input';

interface CashoutComponentProps {}

const CashoutComponent: FC<CashoutComponentProps> = ({}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Vybrat peníze</CardTitle>
        <CardDescription>Zadejte částku, kterou chcete vybrat z účtu</CardDescription>
      </CardHeader>
      <CardContent className="flex w-full max-w-sm space-x-2">
        <Input type="number" placeholder="Zadejte částku..." />
        <Button type="submit">Vybrat</Button>
      </CardContent>
    </Card>
  );
};

export default CashoutComponent;
