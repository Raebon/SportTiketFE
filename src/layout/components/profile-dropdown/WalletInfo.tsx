import { FC } from 'react';
import { DropdownMenuLabel } from '../../../shared/components/ui/dropdown-menu';
import { Button } from '../../../shared/components/ui/button';
import { useUserWalletQuery } from '../../../admin/api/queries/user/getUserWalletQuery';
import { useNavigate } from 'react-router-dom';

interface WalletInfoProps {}

export const WalletInfo: FC<WalletInfoProps> = ({}) => {
  const navigate = useNavigate();
  const { data } = useUserWalletQuery();

  const redirectToCashout = () => navigate('/my-account/cashout');
  const redirectToDeposit = () => navigate('/my-account/deposit');

  return (
    <DropdownMenuLabel className="grid gap-3 text-xs">
      <div className="flex justify-between">
        <p className="text-gray-500">Stav účtu:</p>
        <span>{data?.data.balance} Kč</span>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Vsazeno:</p>
        <span>{data?.data.currentBet} Kč</span>
      </div>
      <div className="flex justify-between gap-2">
        <Button onClick={redirectToDeposit}>Vložit peníze</Button>
        <Button onClick={redirectToCashout}>Vybrat peníze</Button>
      </div>
    </DropdownMenuLabel>
  );
};
