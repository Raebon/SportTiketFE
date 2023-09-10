import { FC } from 'react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertTriangle, Info } from 'lucide-react';

interface AlertMessageProps {
  text: string;
}

export const AlertErrorMessage: FC<AlertMessageProps> = ({ text }) => {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Chyba</AlertTitle>
      <AlertDescription>{text}</AlertDescription>
    </Alert>
  );
};

export const AlertInfoMessage: FC<AlertMessageProps> = ({ text }) => {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>{text}</AlertDescription>
    </Alert>
  );
};
