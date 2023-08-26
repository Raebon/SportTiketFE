import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

const Landing = React.lazy(() => import('../landing/landing'));
const HomePage = React.lazy(() => import('../landing/pages/home/Home'));

const Admin = React.lazy(() => import('../admin/admin'));
const DashboardPage = React.lazy(() => import('../admin/pages/dashboard/DashboardPage'));
const Profile = React.lazy(() => import('../admin/pages/profile/Profile'));
const TiketManagement = React.lazy(() => import('../admin/pages/tiket-management/TiketManagement'));

const Settings = React.lazy(() => import('../admin/pages/settings/Settings'));
const MyAccount = React.lazy(() => import('../admin/pages/my-account/MyAccount'));
const Deposit = React.lazy(() => import('../admin/pages/deposit/Deposit'));
const Cashout = React.lazy(() => import('../admin/pages/cashout/Cashout'));
const TransactionHistory = React.lazy(
  () => import('../admin/pages/transaction-history/TransactionHistory')
);

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
            <Route path="tiket-management" element={<TiketManagement />} />
            <Route path="my-account" element={<MyAccount />}>
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="deposit" element={<Deposit />} />
              <Route path="cashout" element={<Cashout />} />
              <Route path="transaction-history" element={<TransactionHistory />} />
            </Route>
          </Route>

          <Route path={`*`} element={<div>Stránka nenalezena</div>} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};
