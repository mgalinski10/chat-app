'use client';
import Card from '@/components/Card/Card';
import NotificationList from '@/components/NotificationList/NotificationList';
import { useNotifications } from '@/contexts/NotificationsContext';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const NotificationPage = () => {
  const { notifications } = useNotifications();

  return (
    <Card>
      <p className="text-lg font-semibold mb-5">Notifications</p>
      <div>
        {!notifications || notifications.length === 0 ? (
          <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
            <IoIosInformationCircleOutline />
            <span>No notifications to display at the moment.</span>
          </div>
        ) : (
          <NotificationList notifications={notifications} />
        )}
      </div>
    </Card>
  );
};

export default NotificationPage;
