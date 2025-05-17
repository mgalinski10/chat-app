import UserProvider from '@/contexts/UserContext';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <div className="flex min-h-screen bg-blue-900 p-5">
        <Sidebar />
        {children}
      </div>
    </UserProvider>
  );
}
