import { createContext, useContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import { LoginDTO } from '@/services/auth/auth.dto';
import { loginUser } from '@/services/auth/auth.service';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface AuthContextType {
  isAuth?: boolean;
  login?: (dto: LoginDTO) => Promise<Response>;
  logout?: () => void;
  refreshRT?: () => void;
}
export const AuthContext = createContext<AuthContextType>({});

/**
 *
 * @param children
 * @constructor
 * @description Permet de savoir si l'utilsateur est connecté ou non
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const { setItem } = useLocalStorage();
  const login = async (dto: LoginDTO): Promise<Response> => {
    const data = await loginUser(dto);
    if (data) {
      setItem('acess_token', data.access_token);
      setItem('refresh_token', data.refresh_token);
      setIsAuth(true);
      return redirect('/dashboard');
    }
  };
  const logout = () => {};
  const refreshRT = () => {};

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, refreshRT }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for have access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
