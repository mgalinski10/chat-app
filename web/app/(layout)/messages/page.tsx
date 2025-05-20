'use client';
import { useContacts } from '@/contexts/ContactsContext';
import { redirect } from 'next/navigation';
import { IoIosInformationCircleOutline } from 'react-icons/io';

export default function MessagesPage() {
  // TODO: REdirect to first conversation if exists, if not, display Spinner or smth (DONE)
  const { contacts } = useContacts();

  if (!contacts || contacts.length === 0) {
    return (
      <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
        <IoIosInformationCircleOutline />
        <span>No conversation to display at the moment.</span>
      </div>
    );
  }
  const firstContactId = contacts[0].id;

  redirect(`/messages/${firstContactId}`);
}
