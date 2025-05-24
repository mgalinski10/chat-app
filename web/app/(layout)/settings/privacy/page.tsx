'use client';

import BlockedUsers from '@/components/BlockedUsers/BlockedUsers';
import { useContacts } from '@/contexts/ContactsContext';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const PrivacyPage = () => {
  const { blocked } = useContacts();

  return (
    <div>
      <p className="text-lg font-semibold mb-5">Blocked contacts</p>
      {!blocked || blocked.length === 0 ? (
        <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
          <span>
            <IoIosInformationCircleOutline />
          </span>
          Looks like you haven't blocked anyone yet.
        </div>
      ) : (
        <div>
          <BlockedUsers blockedUsers={blocked} />
        </div>
      )}
    </div>
  );
};

export default PrivacyPage;
