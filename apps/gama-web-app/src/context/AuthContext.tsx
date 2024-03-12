import { createContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import * as DTO from '@/services/auth/auth';
import { loginUser } from '@/services/auth/auth.service.ts';
import { useLocalStorage } from '@/hooks/useLocalStorage.tsx';

export const AuthContext = createContext({});

/**
 *
 * @param children
 * @constructor
 * @description Permet de savoir si l'utilsateur est connecté ou non
 */
export const AuthProdiver = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const { setItem } = useLocalStorage();
  const login = async (dto: LoginDTO) => {
    const data = await loginUser(dto);

    console.log(data);
    setItem('acess_token', data.access_token);
    setItem('refresh_token', data.refresh_token);
    // set un status de loading
    // appelService
    //  -> set le AT & RT du userContext
    //  -> redirection vers le /dashboard
    return redirect('/dashboard');
  };
  const logout = () => {};
  const refreshRT = () => {};
  return (
    <AuthContext.Provider value={{ login, logout, refreshRT }}>{children}</AuthContext.Provider>
  );
};

// Custom hook for have access to the context
