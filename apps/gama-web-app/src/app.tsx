import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/router/router';
import { AuthProdiver } from '@/context/AuthContext';

export const App = () => {
  return (
    <AuthProdiver>
      <RouterProvider router={router}></RouterProvider>
    </AuthProdiver>
  );
};
