'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiMessageSquare, FiBell, FiUsers, FiSettings } from 'react-icons/fi';

const sidebarItems: Item[] = [
  {
    name: 'messages',
    icon: <FiMessageSquare className="text-white text-2xl" />,
    url: '/messages',
  },
  {
    name: 'notifications',
    icon: <FiBell className="text-white text-2xl" />,
    url: '/notifications',
  },
  {
    name: 'contacts',
    icon: <FiUsers className="text-white text-2xl" />,
    url: '/contacts',
  },
  {
    name: 'settings',
    icon: <FiSettings className="text-white text-2xl" />,
    url: '/settings',
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
  const isActive = pathname.startsWith(`${item.url}`);

  return (
    <li
      className={`flex h-10 justify-center border-l-4 cursor-pointer transition-colors duration-300
        ${isActive ? 'border-white' : 'border-transparent'}
        hover:border-white`}
    >
      <Link href={item.url} className="flex items-center justify-center w-full">
        {item.icon}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <ul className="flex flex-col justify-center gap-30 w-32">
      {sidebarItems.map((item) => {
        return <SidebarItem key={item.name} item={item} />;
      })}
    </ul>
  );
};

export default Sidebar;
