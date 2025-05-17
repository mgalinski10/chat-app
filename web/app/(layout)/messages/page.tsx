'use client';

import Spinner from '@/components/Spinner/Spinner';
import { useUser } from '@/hooks/useUser';
import React from 'react';
import Card from '@/components/Card/Card';

const MessagesPage = () => {
  const { user } = useUser();

  if (!user) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-3 gap-5 w-full h-full">
      <div className="col-span-2">
        <Card>Welcome, {user.firstName}</Card>
      </div>
      <div className="col-span-1">
        <Card>Profile information</Card>
      </div>
    </div>
  );
};

export default MessagesPage;
