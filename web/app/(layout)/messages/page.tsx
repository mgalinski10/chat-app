'use client';

import Spinner from '@/components/Spinner/Spinner';
import { useUser } from '@/hooks/useUser';
import React from 'react';

const MessagesPage = () => {
  const { user } = useUser();

  if (!user) {
    return <Spinner />;
  }

  return <div>Welcome, {user.firstName}</div>;
};

export default MessagesPage;
