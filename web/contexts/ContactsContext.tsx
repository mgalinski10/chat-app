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
  fetchContacts: () => Promise<void>;
};

export const ContactsContext = createContext<ContactsContextType | null>(null);

export default function ContactsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contacts, setContacts] = useState<Contact[] | null>(null);

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

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactsContext.Provider value={{ contacts, fetchContacts }}>
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
