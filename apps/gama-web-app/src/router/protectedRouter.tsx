import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export const protectedRouter = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);
