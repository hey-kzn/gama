import { create } from 'zustand';
import { authService } from '@/services/auth/auth.service';
import { LoginDTO } from '@/services/auth/auth.dto';

type Token = {
  accessToken: string | undefined;
  refreshToken: string | undefined;
};

type AuthState = {
  isAuth: boolean | undefined;
  tokens: Token | undefined;
};

type AuthAction = {
  setAccessToken: (AT: Token['accessToken']) => void;
  setRefreshToken: (RT: Token['refreshToken']) => void;
  getTokens: () => Token;
  updateIsAuth: () => void;
  loginUser: (credentials: LoginDTO) => void;
  logoutUser: () => void;
  clearTokens: () => void;
};

// C
const AuthStore = create<AuthState & AuthAction>((set) => ({
  isAuth: undefined,
  tokens: undefined,
  setAccessToken: (AT) => {
    set({ tokens[''] });
  },
  setRefreshToken: () => {}
}));
