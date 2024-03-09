import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { Form } from '@/components/ui/form/Form.tsx';

export function UserAuthForm() {
  const [email, setEmail] = useState('test1@mail.com');
  const [password, setPassword] = useState('test1');
  const isLoading = false;

  const handleChangeUsername = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className='shadow-md rounded-lg p-6' onSubmit={handleLogin}>
        <div>
          <h1 className='mb-4 text-2xl font-bold'>Login</h1>
        </div>
        <div className='mb-4'>
          <div className='label'>
            <span className='label-text'>Username</span>
          </div>
          <input
            type='text'
            placeholder='Insérez votre email'
            className='input input-bordered w-full input-md'
            value={email}
            onChange={handleChangeUsername}
          />
        </div>
        <div className='mb-6'>
          <div className='label'>
            <span className='label-text'>Mot de passe</span>
          </div>
          <input
            type='password'
            placeholder='Insérez votre mot de passe'
            className='input input-bordered w-full input-md'
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className='flex items-center'>
          <Button type='submit'>Se connecter</Button>
          <div>
            <span>Pas encore de compte ?</span>
            <Link to='/register' className='font-bold text-purple-600'>
              Cliquez-ici
            </Link>
          </div>
        </div>
      </form>
      <Form></Form>
    </>
  );
}
