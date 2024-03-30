import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { useEffect } from 'react';

export const LoginPage = () => {
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
    useEffect(() => {});

    return (
      <>
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

            <Button type='submit' className='w-full mt-8'>
              Connexion
            </Button>
          </form>
        </Form>
      </>
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
