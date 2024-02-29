import { RouterProvider } from 'react-router-dom';
import { publicRouter } from './router/publicRouter';

export const App = () => {
  return <RouterProvider router={publicRouter}></RouterProvider>;
};
