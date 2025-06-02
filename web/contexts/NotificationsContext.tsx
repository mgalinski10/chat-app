'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';

type Notification = {
  id: number;
  fromUserId: number;
  toUserId: number;
  createdAt: string;
  read: boolean;
  fromUser: {
    firstName: string;
    lastName: string;
  };
};

type NotificationsContextType = {
  notifications: Notification[] | null;
  fetchNotifications: () => void;
};

export const NotificationsContext =
  createContext<NotificationsContextType | null>(null);

export default function NotificationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<Notification[] | null>(
    null,
  );

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notifications', {
        withCredentials: true,
      });

      const newNotifications = response.data;

      //   const hasUnread = newNotifications.some((n: Notification) => !n.read);

      //   if (hasUnread) {

      //   }

      setNotifications(newNotifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setNotifications(null);
    }
  };

  useEffect(() => {
    fetchNotifications();
  });

  return (
    <NotificationsContext.Provider
      value={{ fetchNotifications, notifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }

  return context;
};
