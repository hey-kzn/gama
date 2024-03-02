import { Link } from 'react-router-dom';
import { useState } from 'react';

export const RegisterPage = () => {
  const [credentials, setCrendentials] = useState({
    username: '',
    email: '',
    password: ''
  });
  const handleCredentialsChange = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-full max-w-lg'>
        <form className='bg-[#131313] shadow-md rounded-lg p-6' onSubmit={onSubmit}>
          <div>
            <h1 className='mb-4 text-2xl font-bold'>Enregistrement</h1>
          </div>
          <div className='mb-4'>
            <div className='label'>
              <span>Username</span>
            </div>
            <input
              className='input input-bordered w-full input-md'
              type='text'
              placeholder="Insérez votre nom d'utilisateur"
              value={credentials.username}
              onChange={handleCredentialsChange}
            />
          </div>
          <div className='mb-4'>
            <div className='label'>
              <span>Email</span>
            </div>
            <input
              className='input input-bordered w-full input-md'
              type='text'
              placeholder='Insérez votre email'
              value={credentials.email}
              onChange={handleCredentialsChange}
            />
          </div>
          <div className='mb-4'>
            <div className='label'>
              <span>Mot de passe</span>
            </div>
            <input
              className='input input-bordered w-full input-md'
              type='password'
              placeholder='Insérez votre mot de passe'
            />
          </div>
          <div className='flex items-center'>
            <button className='btn' type='submit'>
              S'enregistrer
            </button>
            <div>
              <span>Déjà un compte ?</span>
              <Link to='/login' className='font-bold text-purple-600'>
                Cliquez-ici
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
