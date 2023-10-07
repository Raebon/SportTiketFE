import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { service } from '../service/service';
import { toast } from '../components/ui/use-toast';
import jwt_decode from 'jwt-decode';

interface Auth {
  accessToken: string | null;
  role: 'admin' | 'user' | null;
  loginLoading: boolean;
  loginError: boolean;
  lastLoginDate: Date | null;
  isUserLogged: boolean;
}

export type AuthContextType = {
  accessToken: string | null;
  role: 'admin' | 'user' | null;
  loginLoading: boolean;
  loginError: boolean;
  lastLoginDate: Date | null;
  isUserLogged: boolean;
  login: (e: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authState, setAuthState] = useState<Auth>({
    accessToken: service.token.getLocalAccessToken(),
    role: _getRoleFromToken(service.token.getLocalAccessToken()),
    loginLoading: false,
    loginError: false,
    lastLoginDate: service.token.getFirstLoginModalSeenToken(),
    isUserLogged: service.auth.isLogged()
  });

  const history = useNavigate();

  const login = async (e: { userName: string; password: string }) => {
    try {
      setAuthState((prevState) => ({ ...prevState, loginLoading: true }));
      const res = await service.auth.login(e);
      history(window.location.pathname);
      setAuthState({
        accessToken: res.token,
        role: _getRoleFromToken(String(res.token)),
        loginLoading: false,
        loginError: false,
        lastLoginDate: null,
        isUserLogged: true
      });
      service.token.setAccessToken(String(res.token));
      service.token.setInfoToken(res);
    } catch (err: any) {
      setAuthState({
        ...authState,
        loginLoading: false,
        loginError: true
      });
      toast({
        title: err.response.data.message,
        variant: 'destructive'
      });
    }
  };

  const logout = () => {
    setAuthState({
      accessToken: null,
      role: null,
      loginLoading: false,
      loginError: false,
      lastLoginDate: null,
      isUserLogged: false
    });
    service.auth.logout();
    history('/');
  };

  useEffect(() => {
    setAuthState({
      ...authState,
      loginLoading: false
    });
  }, [authState.accessToken, authState.loginLoading]);

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>{children}</AuthContext.Provider>
  );
};

const _getRoleFromToken = (token: string | null) => {
  if(!token) return null
  const decoded = jwt_decode(token);
  return (decoded as any).role;
};
