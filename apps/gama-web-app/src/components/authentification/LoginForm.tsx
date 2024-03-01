import { useState } from 'react';
import { Link } from 'react-router-dom';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = false;

  const handleChangeUsername = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/auth/local/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className='bg-[#131313] shadow-md rounded-lg p-6' onSubmit={onSubmit}>
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
        <button className='btn' type='submit'>
          Se connecter
        </button>
        <div>
          <span>Pas encore de compte ?</span>
          <Link to='/register' className='font-bold text-purple-600'>
            Cliquez-ici
          </Link>
        </div>
      </div>
    </form>
  );
}
