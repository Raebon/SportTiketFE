import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../../../shared/context/AuthContext';
import { LoginPoppover } from './LoginPoppover';
import { ProfileDropdown } from './ProfileDropdown';

const Index = () => {
  const { isUserLogged } = useContext<AuthContextType | any>(AuthContext);
  return (
    <div className="relative ml-3">{!isUserLogged ? <LoginPoppover /> : <ProfileDropdown />}</div>
  );
};

export default Index;
