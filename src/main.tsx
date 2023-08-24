import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RoutesComponent } from './routes/routes.tsx';
import { MenuComponent } from './layout/MenuComponent.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MenuComponent />
    <RoutesComponent />
    </BrowserRouter>
  </React.StrictMode>
);
