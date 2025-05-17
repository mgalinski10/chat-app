'use client';

import React, { ReactNode } from 'react';
import SettingsSidebar from '@/components/SettingsSidebar/SettingsSidebar';
import Card from '@/components/Card/Card';

interface SettingsLayoutProps {
  children: ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <Card>
      <div className="flex h-full ">
        <SettingsSidebar />
        <main className="flex-1 p-10">{children}</main>
      </div>
    </Card>
  );
};

export default SettingsLayout;
