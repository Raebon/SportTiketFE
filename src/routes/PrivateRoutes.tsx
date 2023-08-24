import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken') ? true : false;
  const hasJWT = () => {
    console.log(accessToken);
    return accessToken;
  };

  return hasJWT() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
