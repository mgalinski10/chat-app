import UserProvider from '@/contexts/UserContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <div className="flex min-h-screen">{children}</div>
    </UserProvider>
  );
}
