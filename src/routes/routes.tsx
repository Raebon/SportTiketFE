import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import { TiketManagement } from '../admin/pages/tiket-management/TiketManagement';
import { InProggressPage } from '../shared/components/InProggressPage';

const Admin = React.lazy(() => import('../admin/admin'));
const DashboardPage = React.lazy(() => import('../admin/pages/dashboard/DashboardPage'));
const Landing = React.lazy(() => import('../landing/landing'));
const HomePage = React.lazy(() => import('../landing/pages/home/Home'));

export const RoutesComponent = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={''}>
        <Routes>
          <Route path="" element={<Landing />}>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
          </Route>
          <Route
            path=""
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          >
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<InProggressPage />} />
            <Route path="settings" element={<InProggressPage />} />
            <Route path="tiket-management" element={<TiketManagement />} />
          </Route>
          <Route path={`*`} element={<div>Stránka nenalezena</div>} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};
