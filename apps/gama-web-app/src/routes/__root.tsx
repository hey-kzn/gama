import { createRootRoute } from '@tanstack/react-router';
import { Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HomePage = () => {
  return (
    <>
      <header className='flex justify-between items-center h-24 max-w-[1240px] mx-auto'>
        <h1 className='w-full text-3xl font-bold'>GAMA</h1>
        <div className='flex space-x-4'>
          <Link to='/login'>Login</Link>

          <Link to=''>
            <Button>Register</Button>
          </Link>
        </div>
      </header>
      <div>
        <div className='max-w-[800px] mt-[150px] w-full h-screen mx-auto text-center flex flex-col'>
          <h1 className='text-4xl font-bold'>Votre gestion de finance</h1>
        </div>
      </div>
    </>
  );
};

export const Route = createRootRoute({ component: HomePage });