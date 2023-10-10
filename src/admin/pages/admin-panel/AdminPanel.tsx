import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../../../shared/context/AuthContext';
import { UserListComponent } from '../../components/admin-panel/UserListComponent';
import { PageBanner } from '../../../shared/components/PageBanner';

const AdminPanel = ({}) => {
  const { role } = useContext<AuthContextType | any>(AuthContext);
  if (role !== 'admin') {
    return 'Nemáte oprávnění';
  }
  return <section>
    <PageBanner title="Admin panel"></PageBanner>
    <UserListComponent />
    </section>;
};

export default AdminPanel;
