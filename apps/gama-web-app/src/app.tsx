import { RouterProvider } from 'react-router-dom';
import { publicRouter } from '@/components/router/publicRouter';

export const App = () => {
  //const [theme, setTheme] = useState('dark');

  useEffect(() => {});
  return <RouterProvider router={publicRouter}></RouterProvider>;
};
