'use client';

import { useContacts } from '@/contexts/ContactsContext';
import SentRequests from '@/components/SentRequests/SentRequests';
import ReceivedRequests from '@/components/ReceivedRequests/ReceivedRequests';

const ContactRequestsPage = () => {
  const { sent, received } = useContacts();

  console.debug(sent, received);
  return (
    <div>
      <p className="text-lg font-semibold mb-5">Requests received</p>
      <ReceivedRequests />
      <p className="text-lg font-semibold mb-5">Requests sent</p>
      <SentRequests />
    </div>
  );
};

export default ContactRequestsPage;
