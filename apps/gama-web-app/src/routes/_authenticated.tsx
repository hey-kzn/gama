import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAuthStore } from '@/stores/auth.store';

const { isAuth } = useAuthStore.getState();

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async () => {
    if (!isAuth) {
      throw redirect({
        to: '/login'
      });
    }
  }
});
