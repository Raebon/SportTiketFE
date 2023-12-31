import { FC } from 'react';
import FirstLoginTodayDialog from './components/first-login-today-dialog/FirstLoginTodayDialog';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {children}
      <FirstLoginTodayDialog />
    </div>
  );
};
