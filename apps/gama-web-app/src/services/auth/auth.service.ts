import * as DTO from '@/services/auth/auth.dto';
import { useAuthStore } from '@/stores/auth.store';

const BASE_URL = import.meta.env.VITE_BASE_URL_API;

interface JWT {
  accessToken: string;
  refreshToken: string;
}

async function login(loginDTO: DTO.LoginDTO): Promise<void> {
  const { setAccessToken, setRefreshToken } = useAuthStore.getState();

  const response = await fetch(`${BASE_URL}/auth/local/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(loginDTO)
  });

  if (!response.ok) throw new Error('failed to login');

  const result: JWT = await response.json();

  setAccessToken(result.accessToken);
  setRefreshToken(result.refreshToken);
}

async function register(registerDTO: DTO.RegisterDTO) {
  return await fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(registerDTO)
  })
    .then((response) => response.json())
    .then((result) => result.data);
}

export const authService = {
  login,
  register
};
