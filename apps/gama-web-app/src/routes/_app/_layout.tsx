import { createFileRoute, Outlet } from '@tanstack/react-router';

const AppLayout = () => {
  return (
    <main className='flex-col'>
      <div>Test</div>
      <Outlet />
    </main>
  );
};

export const Route = createFileRoute('/_app/_layout')({
  component: AppLayout
});
