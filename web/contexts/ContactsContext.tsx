'use client';

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import axios from 'axios';

type Contact = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

type ContactsContextType = {
  contacts: Contact[] | null;
  sent: FriendRequestSent[] | null;
  received: FriendRequestReceived[] | null;
  blocked: BlockedUser[] | null;
  fetchContacts: () => Promise<void>;
  fetchReceivedRequests: () => Promise<void>;
  fetchSentRequests: () => Promise<void>;
  fetchBlockedUsers: () => Promise<void>;
};

type FriendRequestReceived = {
  id: number;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  sentBy: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
};

type FriendRequestSent = {
  id: number;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  sentTo: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
};

type BlockedUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export const ContactsContext = createContext<ContactsContextType | null>(null);

export default function ContactsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contacts, setContacts] = useState<Contact[] | null>(null);
  const [sent, setSent] = useState<FriendRequestSent[] | null>(null);
  const [received, setReceived] = useState<FriendRequestReceived[] | null>(
    null,
  );
  const [blocked, setBlocked] = useState<BlockedUser[] | null>(null);

  const fetchContacts = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:5000/contacts', {
        withCredentials: true,
      });
      setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setContacts(null);
    }
  }, []);

  const fetchSentRequests = async () => {
    axios
      .get('http://localhost:5000/contacts/requests/sent', {
        withCredentials: true,
      })
      .then((res) => setSent(res.data))
      .catch(() => setSent(null));
  };

  const fetchReceivedRequests = async () => {
    axios
      .get('http://localhost:5000/contacts/requests/received', {
        withCredentials: true,
      })
      .then((res) => setReceived(res.data))
      .catch(() => setReceived(null));
  };

  const fetchBlockedUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/contacts/blocked', {
        withCredentials: true,
      });
      setBlocked(res.data);
    } catch (error) {
      console.error('Error fetching blocked users:', error);
      setBlocked(null);
    }
  };

  useEffect(() => {
    fetchContacts();
    fetchSentRequests();
    fetchReceivedRequests();
    fetchBlockedUsers();
  }, []);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        fetchContacts,
        sent,
        received,
        fetchReceivedRequests,
        fetchSentRequests,
        blocked,
        fetchBlockedUsers,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export const useContacts = () => {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }

  return context;
};
