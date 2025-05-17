'use client';

import Spinner from '@/components/Spinner/Spinner';
import { useUser } from '@/hooks/useUser';
import React from 'react';
import Card from '@/components/Card/Card';
import ProfileCard from '@/components/ProfileCard/ProfileCard';

const MessagesPage = () => {
  const { user } = useUser();

  if (!user) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-4 gap-5 w-full h-full">
      <div className="col-span-3">
        <Card>Welcome, {user.firstName}</Card>
      </div>
      <div className="col-span-1">
        <Card>
          <ProfileCard />
        </Card>
      </div>
    </div>
  );
};

export default MessagesPage;
