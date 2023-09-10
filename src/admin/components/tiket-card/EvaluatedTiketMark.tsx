import { CheckCircle2 } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../../../shared/components/ui/tooltip';

export const EvaluatedTiketMark = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CheckCircle2 className="h-[40px] text-green-600" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Vyhodnocený tiket</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
