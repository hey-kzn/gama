import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/router/router.tsx';
import { AuthProdiver } from '@/hooks/context/AuthContext';

export const App = () => {
  return (
    <AuthProdiver>
      <RouterProvider router={router}></RouterProvider>
    </AuthProdiver>
  );
};
