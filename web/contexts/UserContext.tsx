'use client';

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

type UserContextType = {
  user: User | null;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/user/me', { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
