import { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../../../shared/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../../../shared/components/ui/avatar';
import { NavigateFunction } from 'react-router-dom';
import { service } from '../../../shared/service/service';

interface ProfileDropdownProps {
  navigate: NavigateFunction;
}

export const ProfileDropdown: FC<ProfileDropdownProps> = ({ navigate }) => {
  const loggout = () => {
    service.auth.logout();
    return navigate('/home');
  };

  const redirectToProfile = () => navigate('/profile');
  const redirectToSettings = () => navigate('/settings');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 hover:scale-105">
        <Avatar className="h-8 w-8 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={redirectToProfile} disabled>
          Profil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={redirectToSettings} disabled>
          Nastavení
        </DropdownMenuItem>
        <DropdownMenuItem onClick={loggout}>Odhlásit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
