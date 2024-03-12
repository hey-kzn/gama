import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

/**
 * @description Hook qui permet d'avoir les informations sur l'utilisateur
 */
export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) throw new Error('useUser must be used within an AuthProvider');

  return context;
};
