import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth.store';
import { useEffect, useState } from 'react';
import { authService } from '@/services/auth/auth.service.ts';

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setRefreshToken, setAccessToken } = useAuthStore();

  // Component
  function UserAuthForm() {
    const formSchema = z.object({
      email: z.string().min(2).max(50),
      password: z.string().min(2)
    });
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: 'test1@mail.com',
        password: 'test1'
      }
    });
    const fetchLogin = async (values: z.infer<typeof formSchema>) => {
      setLoading(true);
      try {
        const { data, error } = await authService.login(values);
        if (error) setError(error);

        setRefreshToken(data.refresh_token);
        setAccessToken(data.access_token);
      } catch (errorCatch) {
        setError(errorCatch);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchLogin();
    }, []);

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(fetchLogin)} className='w-full'>
          <div className='space-y-2.5'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} type='email' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type='submit' className='w-full'>
            Connexion
          </Button>
        </form>
        <div>
          <div>{loading && <div>Chargement en cours...</div>}</div>
          <div>{error && <div>Erreur: {error}</div>}</div>
        </div>
      </Form>
    );
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-full max-w-lg'>
        <div className='bg-slate-300 p-6'>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/login')({ component: LoginPage });
