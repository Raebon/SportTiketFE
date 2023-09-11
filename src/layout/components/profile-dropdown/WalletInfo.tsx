import { FC } from 'react';
import { DropdownMenuLabel } from '../../../shared/components/ui/dropdown-menu';
import { Button } from '../../../shared/components/ui/button';
import { useUserWalletQuery } from '../../../admin/api/queries/user/getUserWalletQuery';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../../shared/lib/utils';

interface WalletInfoProps {
  closeDropdownMenu(e: boolean): void;
}

export const WalletInfo: FC<WalletInfoProps> = ({ closeDropdownMenu }) => {
  const navigate = useNavigate();
  const { data } = useUserWalletQuery();

  const redirectToCashout = () => {
    navigate('/my-account/cashout');
    closeDropdownMenu(true);
  };
  const redirectToDeposit = () => {
    navigate('/my-account/deposit');
    closeDropdownMenu(true);
  };

  return (
    <DropdownMenuLabel className="grid gap-3 text-xs">
      <div className="flex justify-between">
        <p className="text-gray-500">Stav účtu:</p>
        <span>{formatNumber(data?.data.balance ?? 0)}</span>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Vsazeno:</p>
        <span>{formatNumber(data?.data.currentBet ?? 0)}</span>
      </div>
      <div className="flex justify-between gap-2">
        <Button onClick={redirectToDeposit}>Vložit peníze</Button>
        <Button onClick={redirectToCashout}>Vybrat peníze</Button>
      </div>
    </DropdownMenuLabel>
  );
};
