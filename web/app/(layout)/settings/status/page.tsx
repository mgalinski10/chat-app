'use client';

import React, { useState, useEffect } from 'react';
import { useSocket } from '@/contexts/SocketContext';

const StatusPage = () => {
  const socket = useSocket();
  const [status, setStatus] = useState<'ONLINE' | 'OFFLINE'>('ONLINE');

  useEffect(() => {
    if (socket && status) {
      socket.emit('status:update', status);
    }
  }, [socket]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();

    if (value === 'ONLINE' || value === 'OFFLINE') {
      setStatus(value as 'ONLINE' | 'OFFLINE');
      socket?.emit('status:update', value);
    }
  };

  return (
    <form>
      <fieldset className="flex items-center space-x-6">
        <legend className="text-lg font-semibold mb-5">Set status</legend>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="ONLINE"
            className="form-radio accent-blue-800"
            checked={status === 'ONLINE'}
            onChange={handleStatusChange}
          />
          <span>Online</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="OFFLINE"
            className="form-radio accent-blue-800"
            checked={status === 'OFFLINE'}
            onChange={handleStatusChange}
          />
          <span>Offline</span>
        </label>
      </fieldset>
    </form>
  );
};

export default StatusPage;
