import { create } from 'zustand';

type AuthState = {
  isAuth: boolean | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
};

type AuthAction = {
  setAccessToken: (at: string) => void;
  setRefreshToken: (rt: string) => void;
  clearTokens: () => void;
  updateIsAuth: () => void;
};

// C
export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  accessToken: undefined,
  refreshToken: undefined,
  isAuth: undefined,
  setAccessToken: (at: string | undefined) => set({ accessToken: at }),
  setRefreshToken: (rt: string | undefined) => set({ refreshToken: rt }),
  clearTokens: () => {
    set({
      accessToken: undefined,
      refreshToken: undefined
    });
  },
  /// TODO
  updateIsAuth: () => {}
}));
