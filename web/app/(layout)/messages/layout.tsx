'use client';

import Spinner from '@/components/Spinner/Spinner';
import { useUser } from '@/hooks/useUser';
import React from 'react';
import Card from '@/components/Card/Card';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import MessagesSidebar from '@/components/MessagesSidebar/MessagesSidebar';

interface MessagesLayoutProps {
  children: React.ReactNode;
}

const MessagesLayout: React.FC<MessagesLayoutProps> = ({ children }) => {
  const { user } = useUser();

  if (!user) return <Spinner />;

  return (
    <div className="grid grid-cols-4 gap-5 w-full h-full">
      <div className="col-span-3">
        <Card>
          <div className="grid grid-cols-3 gap-4 h-full">
            <div className="col-span-1">
              <MessagesSidebar />
            </div>
            <div className="col-span-2">{children}</div>
          </div>
        </Card>
      </div>
      <div className="col-span-1">
        <Card>
          <ProfileCard />
        </Card>
      </div>
    </div>
  );
};

export default MessagesLayout;
