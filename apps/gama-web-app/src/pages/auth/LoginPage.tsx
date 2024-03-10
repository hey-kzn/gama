import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/context/AuthContext.tsx';

export const LoginPage = () => {
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
    async function handleLogin(values: z.infer<typeof formSchema>) {
      await login(values);
      console.log(values);
    }

    const { login } = useAuth();

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className='w-full'>
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
