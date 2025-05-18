'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GoBlocked } from 'react-icons/go';
import { HiStatusOnline } from 'react-icons/hi';

const settingsSidebarItems: Item[] = [
  {
    name: 'Status',
    icon: <HiStatusOnline className="text-gray-500 text-2xl" />,
    url: '/settings/status',
  },
  {
    name: 'Privacy',
    icon: <GoBlocked className="text-gray-500 text-2xl" />,
    url: '/settings/privacy',
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
      className={`flex h-10 border-l-4 cursor-pointer transition-colors duration-300 bg-white
        ${isActive ? 'border-gray-500' : 'border-transparent'}
        hover:border-gray-500`}
    >
      <Link
        href={item.url}
        className="flex items-center gap-2 justify-center w-full"
      >
        {item.icon}
        {item.name}
      </Link>
    </li>
  );
};

const SettingsSidebar = () => {
  return (
    <ul className="flex flex-col justify-items-start gap-8 w-32 bg-white h-full pt-5 rounded-md min-w-50">
      {settingsSidebarItems.map((item) => (
        <SidebarItem key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default SettingsSidebar;
