import { createContext, useState, useEffect } from 'react';
import { LoginDTO } from '@/services/auth/auth.dto';
import { loginUser } from '@/services/auth/auth.service';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface AuthContextType {
  isAuth?: boolean;
  login?: (dto: LoginDTO) => void;
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
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const { setItem } = useLocalStorage();

  const login = async (dto: LoginDTO) => {
    const data = await loginUser(dto);
    if (data) {
      setItem('acess_token', data.access_token);
      setItem('refresh_token', data.refresh_token);
      setIsAuth(true);
      return redirect('/');
    }
  };
  const logout = () => {};
  const refreshRT = () => {};

  useEffect(() => {
    console.log('isAuth a été mis à jour: ', isAuth);
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, refreshRT }}>
      {children}
    </AuthContext.Provider>
  );
};
