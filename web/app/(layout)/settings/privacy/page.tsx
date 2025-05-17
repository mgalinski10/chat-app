import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const PrivacyPage = () => {
  // TODO: Get blocked contacts from api
  const blocked = [];

  return (
    <div>
      <p className="text-lg font-semibold mb-5">Blocked contacts</p>
      {blocked.length === 0 ? (
        <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
          <span>
            <IoIosInformationCircleOutline />
          </span>
          Looks like you haven't blocked anyone yet.
        </div>
      ) : (
        <div>Blocked users</div>
      )}
    </div>
  );
};

export default PrivacyPage;
