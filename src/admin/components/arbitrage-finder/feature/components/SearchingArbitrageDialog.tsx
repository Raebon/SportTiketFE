import { Loader2 } from 'lucide-react';
import { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '../../../../../shared/components/ui/dialog';
import { ArbitrageResult } from '../../../../../shared/service/arbitrage/interfaces';
import { ArbitrageRowResult } from '../../ArbitrageRowResult';

interface SearchingArbitrageDialogProps {
  data: ArbitrageResult[][];
  open: boolean;
  isFetching: boolean;
  close(e: boolean): void;
}

const SearchingArbitrageDialog: FC<SearchingArbitrageDialogProps> = ({
  data,
  open,
  close,
  isFetching
}) => {
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-w-7xl">
        <DialogHeader>
          <DialogTitle>Hledání arbitráže ze zásobníku</DialogTitle>
          <DialogDescription>
            {isFetching ? 'vyhledává...' : 'vyhledávání ukončeno...'}
          </DialogDescription>
        </DialogHeader>
        {isFetching && (
          <div className="flex justify-center">
            <Loader2 className="animate-spin" />
          </div>
        )}
        <section className="max-h-[80vh] overflow-auto grid grid-cols-2">
          {data.map((item, index) => {
            return <ArbitrageRowResult key={index} data={item} links={[]} xs />;
          })}
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default SearchingArbitrageDialog;
