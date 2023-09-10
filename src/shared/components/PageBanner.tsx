import { FC, ReactNode } from 'react';

interface PageBannerProps {
  title: string;
  children?: ReactNode;
}

export const PageBanner: FC<PageBannerProps> = ({ title, children }) => {
  return (
    <div className="flex justify-between py-2 min-h-[40px] mt-5 mb-2">
      <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight my-auto">{title}</h4>
      {children}
    </div>
  );
};
