import { useAuth } from '@/hooks/useAuth';

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();

  console.log('PrivateRoute: modification de isAuth', isAuth);
  return isAuth ? children : redirect('/');
};
