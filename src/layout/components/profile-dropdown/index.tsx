import { service } from '../../../shared/service/service';
import { LoginPoppover } from './LoginPoppover';
import { ProfileDropdown } from './ProfileDropdown';

const Index = () => {
  return (
    <div className="relative ml-3">{!service.auth.isLogged() ? <LoginPoppover /> : <ProfileDropdown />}</div>
  );
};

export default Index;
