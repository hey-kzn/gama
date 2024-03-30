import { useState } from 'react';
import { useAuthStore } from '@/stores/auth.store';
import { authService } from '@/services/auth/auth.service';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { setRefreshToken, setAccessToken } = useAuthStore();

  const login = async () => {
    try {
      setIsLoading(true);
      const { data } = await authService.login(values);
      if (error) setError(error);

      setRefreshToken(data.refresh_token);
      setAccessToken(data.access_token);

      // client nagivate => dashboard
    } catch (errorCatch) {
      setError(errorCatch);
    } finally {
      setLoading(false);
    }
  };
  return { login, isLoading, error };
};
