'use client';

import Spinner from '@/components/Spinner/Spinner';
import { useContacts } from '@/contexts/ContactsContext';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import ContactList from '@/components/ContactList/ContactList';
import { useEffect } from 'react';

const FriendsPage = () => {
  const { contacts, fetchContacts } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, []);

  if (!contacts) return <Spinner />;

  if (contacts.length === 0) {
    return (
      <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
        <IoIosInformationCircleOutline />
        <span>
          Looks like your contact list is empty. Start connecting with others!
        </span>
      </div>
    );
  }

  return (
    <div>
      <p className="text-lg font-semibold mb-5">Contacts</p>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default FriendsPage;
