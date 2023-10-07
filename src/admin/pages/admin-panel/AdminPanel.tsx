import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../../../shared/context/AuthContext';

const AdminPanel = ({}) => {
  const { role } = useContext<AuthContextType | any>(AuthContext);
  if (role !== 'admin') {
    return 'Nemáte oprávnění';
  }
  return <div>AdminPanel</div>;
};

export default AdminPanel;
