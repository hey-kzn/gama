import { createFileRoute } from '@tanstack/react-router';
import { useLogin } from '@/hooks/useLogin';
import { Button } from '@/components/ui/button';

export const LoginPage = () => {
  const { login, isLoading, error } = useLogin();

  const Form = () => {
    const [email, setEmail] = useState('test1@mail.com');
    const [password, setPassword] = useState('test1');

    const handleSubmit = async (event) => {
      event.preventDefault();
      await login({ email: email, password: password });
    };

    return (
      <>
        <div>
          <div>{isLoading && <span>Chargement en cours...</span>}</div>
          <div>{error && <span>{error}</span>}</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              name='email'
              type='email'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Mot de passe:</label>
            <input
              name='password'
              type='password'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <Button disabled={isLoading} type='submit'>
            Connexion
          </Button>
        </form>
      </>
    );
  };
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-full max-w-lg'>
        <div className='bg-slate-300 p-6'>
          <Form />
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/login')({ component: LoginPage });
