import { create } from 'zustand';
import { authService } from '@/services/auth/auth.service';

type Token = {
  accessToken: string | undefined,
  refreshToken: string | undefined,
}

type AuthState = {
  isAuth: boolean;
  Token: Token | undefined
};

type AuthAction = {
  updateIsAuth: () => void;
  loginUser: () => void;
  logoutUser: () => void;
  getTokens: () => Token;
  clearTokens: () => void;
};


// C
const AuthStore = create<AuthState & AuthAction>((set) => ({
  isAuth: false,
  updateIsAuth: (newSate) => set(() => ({isAuth: newSate}));
  loginUser: () => set(() => (
    const resp  = await authService.login()
  )),
  logoutUser: () => set(() => (

  )),
}));
