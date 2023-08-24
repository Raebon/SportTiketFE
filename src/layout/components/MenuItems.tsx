import { FC } from 'react';
import { Button } from '../../shared/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface IMenuItems {
  label: string;
  path: string;
}

interface Props {
  menuItems: Array<IMenuItems>;
}

const MenuItems: FC<Props> = ({ menuItems }) => {
  const navigate = useNavigate();
  const navigateToPath = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {menuItems.map((item, index) => {
            return (
              <Button key={index} variant="menuLink" onClick={() => navigateToPath(item.path)}>
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
