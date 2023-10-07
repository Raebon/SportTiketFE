import { FC, useContext, useState } from 'react';
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
import React from 'react';
interface ProfileDropdownProps {}

export const ProfileDropdown: FC<ProfileDropdownProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data } = useCurrentUserQuery();
  const { logout, role } = useContext<AuthContextType | any>(AuthContext);

  const redirectToProfile = () => navigate('/my-account/profile');
  const redirectToAdminPanel = () => navigate('admin-panel');
  const redirectToSettings = () => navigate('/my-account/settings');
  const redirectToBalanceHistory = () => navigate('/my-account/transactions-history');

  const closeDropdownMenu = (e: boolean) => setOpen(!e);

  const menuItems: MenuItems[] = [
    {
      name: 'Profil',
      onClick: redirectToProfile,
      visibility: true
    },
    {
      name: 'Admin panel',
      onClick: redirectToAdminPanel,
      visibility: role === 'admin'
    },
    {
      name: 'Historie transakcí',
      onClick: redirectToBalanceHistory,
      visibility: true
    },
    {
      name: 'Nastavení',
      onClick: redirectToSettings,
      visibility: true
    },
    {
      name: 'Odhlásit',
      onClick: logout,
      visibility: true
    }
  ];
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="p-2 hover:scale-105">
        <Avatar className="h-8 w-8 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[200px]">
        <DropdownMenuLabel>
          {data?.data.userName}
          <span className="text-gray-400 text-xs font-normal"> - {role}</span>
        </DropdownMenuLabel>
        <WalletInfo closeDropdownMenu={closeDropdownMenu} />
        <DropdownMenuSeparator />
        {menuItems.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.visibility && (
                <DropdownMenuItem onClick={item.onClick}>{item.name}</DropdownMenuItem>
              )}
            </React.Fragment>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface MenuItems {
  name: string;
  onClick: () => void;
  visibility: boolean;
}
