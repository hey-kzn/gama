import { useUser } from '@/hooks/useUser.tsx';

export const DashboardPage = () => {
  const { user } = useUser();
  return (
    <>
      <div>Dashboard (GG t'es co ) {user}</div>
    </>
  );
};
