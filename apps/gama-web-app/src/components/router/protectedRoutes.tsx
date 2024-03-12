import { redirect } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';

export const ProtectedRoutes = ({ children }) => {
  const { user } = useUser();
  if (!user) {
    console.log('State user is null', user);
    return redirect('/');
  }

  console.log('je vais render children');
  return children;
};
