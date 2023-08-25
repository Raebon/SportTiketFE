import { FC } from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>;
};
