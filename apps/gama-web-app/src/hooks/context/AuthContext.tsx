import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDTO } from '@/services/auth.dto';
import { loginService } from '@/services/auth.service';

const AuthContext = createContext(false);

/**
 *
 * @param children
 * @constructor
 * @description Permet de savoir si l'utilsateur est connecté ou non
 */
export const AuthProdiver = ({ children }: AuthProviderProps) => {
  const [isAuth, setAuth] = useState(false);
  const login = async (loginDto: LoginDTO) => {
    const data = await loginService(loginDto);

    if (!data) {
      setAuth(true);
    }
    console.log(data);
  };

  const logout = async () => {};

  const valueContext = {
    login
  };

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>;
};

// Custom hook for have access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
