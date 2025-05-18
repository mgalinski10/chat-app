import UserProvider from '@/contexts/UserContext';
import Sidebar from '@/components/Sidebar/Sidebar';
import { SocketProvider } from '@/contexts/SocketContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <SocketProvider>
        <div
          className="flex h-screen
       bg-blue-900 p-5"
        >
          <Sidebar />
          {children}
        </div>
      </SocketProvider>
    </UserProvider>
  );
}
