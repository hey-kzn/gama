import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { ErrorPage } from '../../pages/ErrorPage';
import { LoginPage } from '../../pages/auth/LoginPage';
import { RegisterPage } from '../../pages/auth/RegisterPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { ProtectedRoutes } from '@/components/router/protectedRoutes';
import { UserProvider } from '@/context/UserContext';

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
      <ProtectedRoutes>
        <UserProvider>
          <DashboardPage />
        </UserProvider>
      </ProtectedRoutes>
    ),
    errorElement: <ErrorPage />
  }
]);
