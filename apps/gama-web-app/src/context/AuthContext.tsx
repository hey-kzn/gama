import { createContext, useState } from 'react';

export const AuthContext = createContext({});

/**
 *
 * @param children
 * @constructor
 * @description Permet de savoir si l'utilsateur est connecté ou non
 */
export const AuthProdiver = ({ children }: AuthProviderProps) => {
  const [isAuth, setAuth] = useState(false);

  const valueContext = {
    isAuth
  };

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>;
};

// Custom hook for have access to the context
