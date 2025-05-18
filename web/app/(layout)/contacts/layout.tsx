import Card from '@/components/Card/Card';
import ContactsSidebar from '@/components/ContactsSidebar/ContactsSidebar';

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card>
      <div className="flex h-full ">
        <ContactsSidebar />
        <main className="flex-1 p-10">{children}</main>
      </div>
    </Card>
  );
}
