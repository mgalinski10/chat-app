'use client';
import { useContacts } from '@/contexts/ContactsContext';
import { useUser } from '@/hooks/useUser';
import axios from 'axios';
import React, { useState } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const SearchFriendsPage = () => {
  const { allUsers, fetchAllUsers } = useUser();
  const { fetchSentRequests } = useContacts();
  const [query, setQuery] = useState('');

  const results = allUsers?.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  if (!allUsers || allUsers.length === 0) {
    return (
      <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
        <IoIosInformationCircleOutline />
        <span>
          No new people to add — you’ve already connected with everyone!
        </span>
      </div>
    );
  }

  const handleAddContact = async (receiverId: number) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/contacts/request',
        { receiverId: receiverId },
        {
          withCredentials: true,
        },
      );
      console.debug(response);
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      fetchAllUsers();
      fetchSentRequests();
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center mb-6">
        <input
          className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus: outline-none"
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for new contacts..."
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {!results || results.length === 0 ? (
          <div className="w-full col-span-4 flex items-center justify-center space-x-2 text-gray-600">
            <IoIosInformationCircleOutline />
            <span>Sorry, we couldn’t find that user.</span>
          </div>
        ) : (
          results.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:cursor-pointer hover:bg-gray-50"
            >
              <img
                src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.id}`}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <p className="text-center font-small">
                {user.firstName} {user.lastName}
              </p>
              <button
                className="bg-blue-800 font-medium rounded-md mt-2 p-1 flex items-center text-white hover:bg-blue-900 hover:cursor-pointer"
                onClick={() => handleAddContact(user.id)}
              >
                <span className="text-sm">Add contact</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchFriendsPage;
