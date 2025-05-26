'use client';

import { useContacts } from '@/contexts/ContactsContext';
import axios from 'axios';
import React, { useState } from 'react';
import { FaEllipsisH, FaBan } from 'react-icons/fa';
import { redirect } from 'next/navigation';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  status: 'ONLINE' | 'OFFLINE';
};

interface ChatWindowHeaderProps {
  user: User;
}

const ChatWindowHeader: React.FC<ChatWindowHeaderProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { fetchContacts, fetchBlockedUsers } = useContacts();

  const handleBlock = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5000/contacts/block',
        {
          blockedId: user.id,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Zablokowano:', res.data);
    } catch (err) {
      console.error('Błąd przy blokowaniu:', err);
    } finally {
      fetchContacts();
      fetchBlockedUsers();
      redirect('/messages');
    }
  };

  return (
    <div className="flex items-center justify-between p-4 relative">
      <div className="flex items-center gap-4">
        <img
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.id}`}
          className="w-12 h-12 rounded-full object-cover mb-3"
        />
        <div className="flex flex-col">
          <span className="font-medium text-sm">
            {user.firstName} {user.lastName}
          </span>
          <span
            className={`text-xs ${
              user.status === 'ONLINE' ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            {user.status.toLowerCase()}
          </span>
        </div>
      </div>

      <div className="relative">
        <button
          className="text-gray-500 hover:text-gray-700 p-1 hover: cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FaEllipsisH size={18} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded shadow-md z-10 ">
            <button
              onClick={handleBlock}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-50 hover: cursor-pointer"
            >
              <FaBan size={15} className=" text-red-400" />
              Block user
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindowHeader;
