import UserProvider from '@/contexts/UserContext';
import Sidebar from '@/components/Sidebar/Sidebar';
import { SocketProvider } from '@/contexts/SocketContext';
import ContactsProvider from '@/contexts/ContactsContext';
import NotificationsProvider from '@/contexts/NotificationsContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <SocketProvider>
        <ContactsProvider>
          <NotificationsProvider>
            <div
              className="flex h-screen
       bg-blue-900 p-5"
            >
              <Sidebar />
              {children}
            </div>
          </NotificationsProvider>
        </ContactsProvider>
      </SocketProvider>
    </UserProvider>
  );
}
