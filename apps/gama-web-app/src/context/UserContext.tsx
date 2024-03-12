import { createContext, useContext, useState } from 'react';
import { User } from '@/utils/types/user.type';

export const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={user}></UserContext.Provider>;
};
