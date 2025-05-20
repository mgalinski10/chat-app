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
  allUsers: User[] | null;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[] | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/user/me', { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/user/all', { withCredentials: true })
      .then((res) => setAllUsers(res.data))
      .catch(() => setAllUsers(null));
  }, []);

  return (
    <UserContext.Provider value={{ user, allUsers }}>
      {children}
    </UserContext.Provider>
  );
}
