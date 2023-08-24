import React from 'react';
import ProfileDropdown from './components/ProfileDropdown';
import NotificationButton from './components/NotificationButton';
import MobileMenuItems from './components/MobileMenuItems';
import MenuItems, { IMenuItems } from './components/MenuItems';
import OpenMobileMenuButton from './components/OpenMobileMenuButton';

const menuItems: Array<IMenuItems> = [
  {
label: "Invoice management",
path: "/invoice"
  }
]

export const MenuComponent = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <OpenMobileMenuButton />
          <MenuItems menuItems={menuItems} />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NotificationButton />

            <ProfileDropdown />
          </div>
        </div>
      </div>
      <MobileMenuItems />
    </nav>
  );
};
