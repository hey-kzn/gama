import { useContext } from 'react';

/**
 * @description Hook qui permet d'avoir les informations sur l'utilisateur
 */
export const useUser = () => {
  const context = useContext(userContext);

  if (context === undefined) throw new Error('useUser must be used within an AuthProvider');

  const getUser = () => {};

  return context;
};
