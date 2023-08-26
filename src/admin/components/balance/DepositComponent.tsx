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

interface DepositComponentProps {}

export const DepositComponent: FC<DepositComponentProps> = ({}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Vložit peníze</CardTitle>
        <CardDescription>Zadejte částku, kterou chcete připsat na účet</CardDescription>
      </CardHeader>
      <CardContent className="flex w-full max-w-sm space-x-2">
        <Input type="number" placeholder="Zadejte částku..." />
        <Button type="submit">Vložit</Button>
      </CardContent>
    </Card>
  );
};
