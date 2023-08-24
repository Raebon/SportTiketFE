import React from 'react';
import { Button } from '../../shared/components/ui/button';

const MobileMenuItems = () => {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Button variant="menuLink" className="w-full">
          Dashboard
        </Button>
      </div>
    </div>
  );
};

export default MobileMenuItems;
