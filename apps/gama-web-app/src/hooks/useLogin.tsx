import { useState } from 'react';
import { useAuthStore } from '@/stores/auth.store';
import { authService } from '@/services/auth/auth.service';
import { useNavigate } from '@tanstack/react-router';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { setRefreshToken, setAccessToken } = useAuthStore();

  const navigate = useNavigate();

  const login = async (credentials: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const { data } = await authService.login(credentials);

      if (data) {
        setRefreshToken(data.refresh_token);
        setAccessToken(data.access_token);

        navigate({ to: '/dashboard' });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
