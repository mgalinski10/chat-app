import React from 'react';
import { useUser } from '@/hooks/useUser';
import Spinner from '../Spinner/Spinner';

const ProfileCard = () => {
  const { user } = useUser();

  if (!user) {
    return <Spinner />;
  }
  //   Somewhere here add statuc like: active | offline | busy
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-md w-full h-full">
      <img
        src="https://i.pravatar.cc/150?img=3"
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md"
      />
      <h2 className="text-black text-xl font-semibold mb-1">
        {user?.firstName} {user?.lastName}
      </h2>
      <p className="text-gray-500 text-sm uppercase tracking-wide">
        CEO &amp; FOUNDER
      </p>
    </div>
  );
};

export default ProfileCard;
