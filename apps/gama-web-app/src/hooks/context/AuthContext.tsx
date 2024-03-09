import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { User } from '../../types/User';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<User | null>(null);

/**
 *
 * @param children
 * @param isSignedIn
 * @constructor
 */
export const AuthProdiver = ({ children, isSignedIn }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate('/dashboard');
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };
  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for have access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
