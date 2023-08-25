import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/components/ui/button';
import { IMenuItems } from './MenuItems';

interface Props {
  menuItems: Array<IMenuItems>;
}

const MobileMenuItems: FC<Props> = ({ menuItems }) => {
  const navigate = useNavigate();
  const navigateToPath = (path: string) => {
    navigate(path);
  };
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {menuItems.map((item, index) => {
          return (
            <Button
              key={index}
              variant="menuLink"
              className="w-full"
              onClick={() => navigateToPath(item.path)}
            >
              {item.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenuItems;
