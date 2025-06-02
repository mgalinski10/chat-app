import React, { useEffect } from 'react';
import { useUser } from '@/hooks/useUser';
import Spinner from '../Spinner/Spinner';
import { useSocket } from '@/contexts/SocketContext';

const ProfileCard = () => {
  const { user, status, setStatus } = useUser();

  const socket = useSocket();

  useEffect(() => {
    if (!socket || !user) return;

    const handleStatusUpdate = ({
      status,
    }: {
      userId: number;
      status: 'ONLINE' | 'OFFLINE';
    }) => {
      setStatus(status);
    };

    socket.on('user:statusUpdate', handleStatusUpdate);

    return () => {
      socket.off('user:statusUpdate', handleStatusUpdate);
    };
  }, [socket, user]);

  if (!user) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-md w-full h-full">
      <img
        src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.id}`}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md"
      />
      <h2 className="text-black text-xl font-semibold mb-1">
        {user?.firstName} {user?.lastName}
      </h2>

      <span
        className={` ${
          status === 'ONLINE' ? 'text-green-600' : 'text-gray-400'
        }`}
      >
        {status.toLowerCase()}
      </span>
    </div>
  );
};

export default ProfileCard;
