import { useEffect, useState } from 'react';
import { LoginForm } from '../components/authentification/LoginForm.tsx';

export const LoginPage = () => {
  useEffect(() => {});

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-full max-w-lg'>
        <LoginForm />
      </div>
    </div>
  );
};
