'use client';
import { useContacts } from '@/contexts/ContactsContext';
import { redirect } from 'next/navigation';

export default function MessagesPage() {
  // TODO: REdirect to first conversation if exists, if not, display Spinner or smth (DONE)
  const { contacts } = useContacts();

  // little HAX
  if (!contacts || contacts.length === 0) {
    redirect('/messages');
  }
  const firstContactId = contacts[0].id;

  redirect(`/messages/${firstContactId}`);
}
