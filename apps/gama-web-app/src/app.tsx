import { RouterProvider } from 'react-router-dom';
import { publicRouter } from './router/publicRouter';
import { useState } from 'react';

export const App = () => {
  const [theme, setTheme] = useState('dark');

  useEff;
  return <RouterProvider router={publicRouter}></RouterProvider>;
};
