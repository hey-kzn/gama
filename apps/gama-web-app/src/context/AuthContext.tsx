import { createContext, useState } from 'react';
import { redirect } from 'react-router-dom';

export const AuthContext = createContext({});

/**
 *
 * @param children
 * @constructor
 * @description Permet de savoir si l'utilsateur est connecté ou non
 */
export const AuthProdiver = ({ children }: AuthProviderProps) => {
  const login = async () => {
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
    <AuthContext.Provider value={{ login, logout, refreshRT }}>{children}</AuthContext.Provider>
  );
};

// Custom hook for have access to the context
