import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUserQuery } from '../../../admin/api/queries/user/getCurrentUserQuery';
import { Avatar, AvatarFallback, AvatarImage } from '../../../shared/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../../../shared/components/ui/dropdown-menu';
import AuthContext, { AuthContextType } from '../../../shared/context/AuthContext';
import { WalletInfo } from './WalletInfo';
interface ProfileDropdownProps {}

export const ProfileDropdown: FC<ProfileDropdownProps> = ({}) => {
  const navigate = useNavigate();
  const { data } = useCurrentUserQuery();
  const { logout } = useContext<AuthContextType | any>(AuthContext);
  const redirectToProfile = () => navigate('/my-account/profile');
  const redirectToSettings = () => navigate('/my-account/settings');
  const redirectToBalanceHistory = () => navigate('/my-account/transactions-history');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 hover:scale-105">
        <Avatar className="h-8 w-8 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[200px]">
        <DropdownMenuLabel>{data?.data.userName}</DropdownMenuLabel>
        <WalletInfo />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={redirectToProfile} disabled>
          Profil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={redirectToBalanceHistory} disabled>
          Historie transakcí
        </DropdownMenuItem>
        <DropdownMenuItem onClick={redirectToSettings} disabled>
          Nastavení
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>Odhlásit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
