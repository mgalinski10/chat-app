'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GoSearch } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const contactsSidebarItems: Item[] = [
  {
    name: 'Friends',
    icon: <FiUsers className="text-gray-500 text-2xl" />,
    url: '/contacts/friends',
  },
  {
    name: 'Search People',
    icon: <GoSearch className="text-gray-500 text-2xl" />,
    url: '/contacts/search',
  },
  {
    name: 'Contact requests',
    icon: <AiOutlineUsergroupAdd className="text-gray-500 text-2xl" />,
    url: '/contacts/requests',
  },
];

type Item = {
  name: string;
  icon: React.ReactNode;
  url: string;
};

interface SidebarItemProps {
  item: Item;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.url);

  return (
    <li
      className={`flex justify-center h-10 border-l-4 cursor-pointer transition-colors duration-300 bg-white
        ${isActive ? 'border-gray-500' : 'border-transparent'}
        hover:border-gray-500`}
    >
      <Link href={item.url} className="flex items-center gap-2 w-full px-4">
        <span>{item.icon}</span>
        <span>{item.name}</span>
      </Link>
    </li>
  );
};

const ContactsSidebar = () => {
  return (
    <ul className="flex flex-col justify-items-start gap-8 w-48 bg-white h-full pt-5 rounded-md min-w-50">
      {contactsSidebarItems.map((item) => (
        <SidebarItem key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default ContactsSidebar;
