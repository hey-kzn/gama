import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/router/router.tsx';
import { AuthProdiver } from '@/context/AuthContext.tsx';

export const App = () => {
  return (
    <AuthProdiver>
      <RouterProvider router={router}></RouterProvider>
    </AuthProdiver>
  );
};
