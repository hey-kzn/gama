import { redirect } from 'react-router-dom';

export const ProtectedRoutes = ({ user, children }) => {
  if (!user) {
    return redirect('/');
  }
  return children;
};
