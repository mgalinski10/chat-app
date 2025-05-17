'use client';

import Spinner from '@/components/Spinner/Spinner';
import { useUser } from '@/hooks/useUser';
import React from 'react';

const MessagesPage = () => {
  const { user } = useUser();

  if (!user) {
    return <Spinner />;
  }

  return <div className="">Welcome, {user.firstName}! It's messages page.</div>;
};

export default MessagesPage;
