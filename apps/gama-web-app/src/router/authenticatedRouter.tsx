import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export const authenticatedRouter = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);
