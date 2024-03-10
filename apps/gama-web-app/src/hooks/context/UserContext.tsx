import { createContext, useContext, useState } from 'react';
import { User } from '@/types/user.type';

const userContext = createContext<User | null>(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
};

export const useUser = () => {
  const context = useContext(userContext);

  if (context === undefined) throw new Error('useUser must be used within an AuthProvider');

  return context;
};
