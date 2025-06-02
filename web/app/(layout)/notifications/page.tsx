import Card from '@/components/Card/Card';
import NotificationList from '@/components/NotificationList/NotificationList';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const NotificationPage = () => {
  const mock = [
    {
      id: 1,
      fromUser: {
        firstName: 'Jan',
        lastName: 'Kowalski',
      },
      createdAt: new Date().toISOString(),
      read: false,
    },
    {
      id: 2,
      fromUser: {
        firstName: 'Anna',
        lastName: 'Nowak',
      },
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      read: true,
    },
  ];

  return (
    <Card>
      <p className="text-lg font-semibold mb-5">Notifications</p>
      <div>
        {mock.length === 0 ? (
          <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
            <IoIosInformationCircleOutline />
            <span>No notifications to display at the moment.</span>
          </div>
        ) : (
          <NotificationList notifications={mock} />
        )}
      </div>
    </Card>
  );
};

export default NotificationPage;
