import { create } from 'zustand';

type State = {
  // l'utilisateur s'est connecté
  isAuth: boolean;
};

// Toutes la logique qui permet d'update le state
type Action = {
  updateIsAuth: (isAuth: State['isAuth']) => void;
  login: () => void;
  logout: () => void;
  getAccessToken: () => void;
  getRefreshToken: () => void;
  clearTokens: () => void;
};

type AuthStore = {
  state: {
    accessToken: string | undefined
    refreshToken: string | undefined
  },
  action: {
    loginUser: () => void;
    logoutUser: () => void;
  }
}

// C
const useAuthStore = create<State & Action>((set) => ({
  isAuth: false,
  updateIsAuth: (newSate) => set(() => ({isAuth: newSate}));
  login: () =>
}));
