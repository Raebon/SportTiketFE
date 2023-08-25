import { LogIn } from 'lucide-react';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '../../../shared/components/ui/popover';
import { service } from '../../../shared/service/service';
import LoginForm from './LoginForm';

interface LoginDetail {
  email: string;
  password: string;
}

interface LoginPoppoverProps {
  navigate: NavigateFunction;
}

export const LoginPoppover: FC<LoginPoppoverProps> = ({ navigate }) => {
  const login = (event: LoginDetail) => {
    console.log('test', event);
    service.auth.login();
    return navigate('/dashboard');
  };
  return (
    <Popover>
      <PopoverTrigger className="text-gray-300 hover:bg-gray-700 hover:text-white block py-2 text-base font-medium relative rounded-full px-2">
        <LogIn />
      </PopoverTrigger>
      <PopoverContent>
        <LoginForm login={login} />
      </PopoverContent>
    </Popover>
  );
};
