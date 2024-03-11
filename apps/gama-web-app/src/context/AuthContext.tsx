import { createContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import * as DTO from '@/services/auth/auth.dto';

export const AuthContext = createContext({});

/**
 *
 * @param children
 * @constructor
 * @description Permet de savoir si l'utilsateur est connecté ou non
 */
export const AuthProdiver = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const login = async (dto: LoginDTO) => {
    setIsLoading(true);
    console.log('test');
    // set un status de loading
    // appelService
    //  -> set le AT & RT du userContext
    //  -> redirection vers le /dashboard
    return redirect('/dashboard');
  };
  const logout = () => {};
  const refreshRT = () => {};
  return (
    <AuthContext.Provider value={{ login, logout, isLoading, refreshRT }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for have access to the context
