import { LogIn } from 'lucide-react';
import { FC, useContext, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../../shared/components/ui/popover';
import AuthContext, { AuthContextType } from '../../../shared/context/AuthContext';
import { LoginDetail } from '../../../shared/interfaces';
import LoginForm from './LoginForm';

interface LoginPoppoverProps {}

export const LoginPoppover: FC<LoginPoppoverProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { login } = useContext<AuthContextType | any>(AuthContext);

  const closePopover = (e: boolean) => setOpen(!e);

  const handleLogin = (event: LoginDetail) => {
    login(event);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="text-gray-300 hover:bg-gray-700 hover:text-white block py-2 text-base font-medium relative rounded-full px-2">
        <LogIn />
      </PopoverTrigger>
      <PopoverContent>
        <LoginForm login={handleLogin} closePopover={closePopover} />
      </PopoverContent>
    </Popover>
  );
};
