import React from 'react';
import { Navigate } from 'react-router-dom';
import { service } from '../shared/service/service';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  return service.auth.isLogged() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
