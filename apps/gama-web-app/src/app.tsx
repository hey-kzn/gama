import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/router/router';
import { AuthProvider } from '@/context/AuthContext';

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
};
