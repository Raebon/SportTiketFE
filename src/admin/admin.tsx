import React from 'react';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <React.Suspense fallback={'loading'}>
      <Outlet />
    </React.Suspense>
  );
};

export default Admin;
