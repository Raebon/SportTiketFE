import { FC, ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../shared/components/ui/card';

interface MyAccountCardHeaderProps {
  children: ReactNode | ReactNode[];
  balance: number;
  title: string;
  description: string;
  contentClassName?: string;
}

export const MyAccountCard: FC<MyAccountCardHeaderProps> = ({
  balance,
  title,
  description,
  contentClassName,
  children
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>{title}</span>
          <p className="text-sm">
            <small className="text-gray-500">Aktuální zůstatek: </small>
            {balance} Kč
          </p>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
};
