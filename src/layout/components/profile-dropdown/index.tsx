import { useNavigate } from 'react-router-dom';
import { service } from '../../../shared/service/service';
import { LoginPoppover } from './LoginPoppover';
import { ProfileDropdown } from './ProfileDropdown';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ml-3">
      {!service.auth.isLogged() ? (
        <LoginPoppover navigate={navigate} />
      ) : (
        <ProfileDropdown navigate={navigate} />
      )}
    </div>
  );
};

export default Index;
