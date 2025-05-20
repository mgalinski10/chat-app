'use client';

import { useContacts } from '@/contexts/ContactsContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Spinner from '../Spinner/Spinner';
import { IoIosInformationCircleOutline } from 'react-icons/io';

type MessageSideBarItem = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

const MessagesSidebarItem = ({ item }: { item: MessageSideBarItem }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/messages/${item.id}`);

  return (
    <li
      className={`flex items-center space-x-4 p-3 cursor-pointer border-l-4 transition-colors duration-300
        ${isActive ? 'border-gray-500' : 'border-transparent hover:border-gray-500'}`}
    >
      <Link
        href={`/messages/${item.id}`}
        className="flex items-center space-x-4 w-full"
      >
        <img
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${item.id}`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col overflow-hidden">
          <span className="font-medium truncate">
            {item.firstName} {item.lastName}
          </span>
          <span className="text-sm text-gray-400 truncate">4 hours ago</span>
        </div>
      </Link>
    </li>
  );
};

const MessagesSidebar = () => {
  // TODO: Add Link and proper routing: Click conversation -> change url on smth like: /messages/12345-1233-123123 -> display conversation chat with that id
  // so meaby useProvider or smth to fetch conversation from here
  const { contacts } = useContacts();

  if (!contacts) {
    return <Spinner />;
  }

  if (contacts.length === 0) {
    return (
      <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
        <IoIosInformationCircleOutline />
        <span>
          Looks like your contact list is empty. Start connecting with others!
        </span>
      </div>
    );
  }

  return (
    <aside
      className="h-full bg-white rounded-xl
     p-4"
    >
      <h2 className="text-lg font-semibold mb-4">Chats</h2>
      <ul className="space-y-2">
        {contacts.map((item) => {
          return <MessagesSidebarItem key={item.id} item={item} />;
        })}
      </ul>
    </aside>
  );
};

export default MessagesSidebar;
