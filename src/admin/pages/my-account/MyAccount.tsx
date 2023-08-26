import { FC } from 'react';
import { MyAccountMenu } from '../../components/my-account-menu/MyAccountMenu';
import { Outlet } from 'react-router-dom';

interface MyAccountProps {}

const MyAccount: FC<MyAccountProps> = ({}) => {
  return (
    <div className="flex gap-2 py-5">
      <MyAccountMenu />
      <Outlet />
    </div>
  );
};

export default MyAccount;
