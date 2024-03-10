import { createContext, useContext, useState } from 'react';
import { LoginDTO } from '@/services/auth.dto.ts';
import { loginService } from '@/services/auth.service.ts';
import { useLocalStorage } from '@/hooks/useLocalStorage.tsx';

export const AuthContext = createContext(false);

/**
 *
 * @param children
 * @constructor
 * @description Permet de savoir si l'utilsateur est connecté ou non
 */
export const AuthProdiver = ({ children }: AuthProviderProps) => {
  const [isAuth, setAuth] = useState(false);
  const [setValue] = useLocalStorage();
  const login = async (loginDto: LoginDTO) => {
    const data = await loginService(loginDto);

    if (!data) {
      setAuth(true);
    }
    console.log(data);
  };

  const logout = async () => {};

  const valueContext = {
    login,
    isAuth
  };

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>;
};

// Custom hook for have access to the context
