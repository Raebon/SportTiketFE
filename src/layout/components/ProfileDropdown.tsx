import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../../shared/components/ui/dropdown-menu';
import { Button } from '../../shared/components/ui/button';

import { Avatar, AvatarFallback, AvatarImage } from '../../shared/components/ui/avatar';

const ProfileDropdown = () => {
  return (
    <div className="relative ml-3">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button type="button" variant={'icon'} className="px-2">
            <Avatar className="h-8 w-8 rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
