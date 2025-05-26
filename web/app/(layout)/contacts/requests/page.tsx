'use client';

import SentRequests from '@/components/SentRequests/SentRequests';
import ReceivedRequests from '@/components/ReceivedRequests/ReceivedRequests';

const ContactRequestsPage = () => {
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
