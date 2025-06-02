'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { showToast } from 'nextjs-toast-notify';

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

      const unreadNotifications = newNotifications.some(
        (n: Notification) => !n.read,
      );
      // TODO: Add filters by date, read/unread etc.
      if (unreadNotifications) {
        showToast.info('You have unread notifications', {
          duration: 4000,

          progress: true,

          position: 'top-right',

          transition: 'fadeIn',

          icon: '',

          sound: false,
        });
      }
      setNotifications(newNotifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setNotifications(null);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);
  console.log('Current notifications in context: ', notifications);
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
