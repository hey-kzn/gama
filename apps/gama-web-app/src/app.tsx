import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { publicRouter } from './router/publicRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={publicRouter} />
  </React.StrictMode>
);
