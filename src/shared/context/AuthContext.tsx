import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { service } from '../service/service';
import { toast } from '../components/ui/use-toast';

export type AuthContextType = {
  accessToken: string | null;
  loginLoading: boolean;
  loginError: boolean;
  lastLoginDate: Date | null;
  setAccessToken: (e: any) => void;
  login: (e: any) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    service.token.getLocalAccessToken()
  );
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [lastLoginDate, setLastLoginDate] = useState<Date | null>(null);

  const [loading, setLoading] = useState(true);

  const history = useNavigate();

  const login = async (e: { userName: string; password: string }) => {
    setLoginLoading(true);
    service.auth
      .login(e)
      .then((res) => {
        setLoading(false);
        setAccessToken(res.token);
        service.token.setAccessToken(String(res.token));
        service.token.setInfoToken(res);
        setLastLoginDate(null);
        setLoginLoading(false);
        setLoginError(false);

        history(window.location.pathname);
      })
      .catch((err) => {
        setLoginLoading(false);
        setLoginError(true);
        setLastLoginDate(null);
        toast({
          title: err.response.data.message,
          variant: 'destructive'
        });
      });
  };

  let logout = () => {
    setAccessToken(null);
    setLoading(false);
    service.token.removeTokens();
    history('/');
  };

  let contextData = {
    accessToken: accessToken,
    loginLoading: loginLoading,
    loginError: loginError,
    lastLoginDate: lastLoginDate,
    setAccessToken: setAccessToken,
    login: login,
    logout: logout
  };

  useEffect(() => {
    setLoading(false);
  }, [accessToken, loading]);

  return (
    <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>
  );
};
