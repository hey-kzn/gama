import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { ErrorPage } from '../../pages/ErrorPage';
import { LoginPage } from '../../pages/auth/LoginPage';
import { RegisterPage } from '../../pages/auth/RegisterPage';
import { DashboardPage } from '@/pages/DashboardPage';

const PrivateRoute = ({ children }) => {
  const isAuth = useAuth();
  return isAuth ? children : <Navigate to='/' />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />
  }
]);
