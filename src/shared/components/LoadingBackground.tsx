import { Loader2 } from 'lucide-react';
import { FC } from 'react';

export const LoadingBackground: FC = ({}) => {
  return (
    <div className="absolute flex justify-center w-full h-[100%] items-center backdrop-blur-[2px] bg-primary/10 z-10 rounded-md">
      <Loader2 className="w-7 h-7 animate-spin" />
    </div>
  );
};
