import { PropsWithChildren } from 'react';
import { useAuth } from '@/hooks/context/AuthContext';

type ProtectedRouteProps = PropsWithChildren;
// TODO: check if the user is auth
export default function ProtectedRouter({ children }: ProtectedRouteProps) {
  const user = useAuth();
  return children;
}
