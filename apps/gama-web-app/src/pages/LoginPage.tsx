import { LoginForm } from '../components/authentification/LoginForm';

export const LoginPage = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-full max-w-lg'>
        <LoginForm />
      </div>
    </div>
  );
};
