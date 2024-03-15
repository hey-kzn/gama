import { create } from 'zustand';

type State = {
  // l'utilisateur s'est connecté
  isAuth: boolean;
};

type Action = {
  updateIsAuth: (isAuth: State['isAuth']) => void;
  login: () => void;
  logout: () => void;
  getAccessToken: () => void;
  getRefreshToken: () => void;
  clearTokens: () => void;
};

// C
const useAuthStore = create<State & Action>((set) => ({
  isAuth: false,
  updateIsAuth: () => void;
}));
