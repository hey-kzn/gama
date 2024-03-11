import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

/**
 * @description Use this hook instead of the context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
