import React from 'react';
import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <React.Suspense fallback={'loading'}>
      <Outlet />
    </React.Suspense>
  );
};

export default Landing;
