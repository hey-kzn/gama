import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { PropsWithChildren } from 'react';
import { useAuth } from '../context/AuthContext.tsx';

type ProtectedRouteProps = PropsWithChildren;
// TODO: check if the user is auth
export default function ProtectedRouter({ children }: ProtectedRouteProps) {
  const user = useAuth();
  return children;
}
