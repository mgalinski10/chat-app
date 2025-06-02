'use client';

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  status: 'ONLINE' | 'OFFLINE';
};

type UserContextType = {
  user: User | null;
  allUsers: User[] | null;
  status: 'ONLINE' | 'OFFLINE';
  setStatus: (status: 'ONLINE' | 'OFFLINE') => void;
  fetchAllUsers: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[] | null>(null);
  const [status, setStatus] = useState<'ONLINE' | 'OFFLINE'>('ONLINE');

  useEffect(() => {
    axios
      .get('http://localhost:5000/user/me', { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  const fetchAllUsers = () => {
    axios
      .get('http://localhost:5000/user/all', { withCredentials: true })
      .then((res) => setAllUsers(res.data))
      .catch(() => setAllUsers(null));
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, allUsers, fetchAllUsers, status, setStatus }}
    >
      {children}
    </UserContext.Provider>
  );
}
