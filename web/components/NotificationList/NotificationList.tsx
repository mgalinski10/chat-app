'use client';
import Link from 'next/link';
import { hoursSince } from '@/utils/hourSince';
import axios from 'axios';
import { useNotifications } from '@/contexts/NotificationsContext';

type Notification = {
  _id: number;
  fromUser: {
    firstName: string;
    lastName: string;
  };
  createdAt: string;
  read: boolean;
};

interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
}) => {
  const { fetchNotifications } = useNotifications();
  return (
    <div className="flex flex-col gap-4">
      {notifications.map((notification) => (
        <div
          key={notification._id}
          className="flex items-center justify-between p-4 rounded-xl bg-white shadow-sm"
        >
          <div className="flex items-center gap-4">
            <img
              src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${notification._id}`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">
                {notification.fromUser.firstName}{' '}
                {notification.fromUser.lastName}{' '}
                <span className="text-gray-400">
                  has sent you a contact request.
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className=" text-gray-400 w-50 text-center">
              {hoursSince(notification.createdAt) === 0
                ? 'Received recently'
                : `${hoursSince(notification.createdAt)} hours ago `}
            </p>
          </div>

          <span
            className={`${notification.read ? 'text-gray-400' : 'text-blue-700'}`}
          >
            {notification.read ? 'Read' : 'Unread'}
          </span>
          <div className="flex items-center gap-4">
            <Link href="/contacts/requests">
              <button
                onClick={async () => {
                  try {
                    await axios.post(
                      'http://localhost:5000/notifications/read',
                      { notificationId: notification._id },
                      {
                        withCredentials: true,
                      },
                    );
                    fetchNotifications();
                  } catch (error) {
                    console.error('Error read notification', error);
                  }
                }}
                className="font-bold  bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md hover:cursor-pointer"
              >
                Check
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
