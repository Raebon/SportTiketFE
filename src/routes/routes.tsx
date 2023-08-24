import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

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
              <Route path="/admin" element={<DashboardPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </React.Suspense>
    </React.Fragment>
  );
};
