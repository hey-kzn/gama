import { useState } from 'react';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-full max-w-lg'>
        <form className='bg-[#131313] shadow-md rounded-lg p-6'>
          <div>
            <h1 className='mb-4 text-2xl font-bold'>Connexion à votre compte ! 😊</h1>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Username</label>
            <input
              type='text'
              className='shadow appearance-none rounded w-full py-1 px-3 leading-tight focus:outline-none focus:shadow-outline'
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          <div className='mb-6'>
            <label className='block mb-2'>Mot de passe</label>
            <input
              type='password'
              className='shadow appearance-none rounded w-full py-1 px-3 leading-tight focus:outline-none focus:shadow-outline'
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <div className='flex items-center'>
            <button className='bg-purple-700 rounded-lg hover:bg-purple-600 inline-block align-baseline p-2'>
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
