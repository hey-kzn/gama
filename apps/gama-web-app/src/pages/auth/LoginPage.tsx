import { LoginForm } from '../../components/authentification/LoginForm.tsx';
import { Button } from '@/components/ui/button';

export const LoginPage = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-full max-w-lg'>
        <LoginForm />
      </div>
      <Button>Test</Button>
    </div>
  );
};
