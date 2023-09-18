import { IMenuItems } from '../shared/interfaces';
import MenuItems from './components/MenuItems';
import MobileMenuItems from './components/MobileMenuItems';
import NotificationButton from './components/notification';
import OpenMobileMenuButton from './components/OpenMobileMenuButton';
import ProfileDropdown from './components/profile-dropdown';

const menuItems: Array<IMenuItems> = [
  {
    label: 'Domov',
    path: '/home'
  }
];
const privateItems: Array<IMenuItems> = [
  {
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    label: 'Správa tiketů',
    path: '/tiket-management'
  },
  {
    label: 'Vyhledat Arbitrážní Sázky',
    path: '/arbitrage'
  }
];

export const MenuComponent = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <OpenMobileMenuButton />
          <MenuItems menuItems={menuItems} privateMenuItems={privateItems} />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NotificationButton />

            <ProfileDropdown />
          </div>
        </div>
      </div>
      <MobileMenuItems menuItems={menuItems} />
    </nav>
  );
};
