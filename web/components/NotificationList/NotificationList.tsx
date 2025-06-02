'use client';

const NotificationList = () => {
  const mockNotifications = [
    {
      id: '1',
      fromUser: {
        firstName: 'Jan',
        lastName: 'Kowalski',
      },
      createdAt: new Date().toISOString(),
      read: false,
    },
    {
      id: '2',
      fromUser: {
        firstName: 'Anna',
        lastName: 'Nowak',
      },
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      read: true,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {mockNotifications.map((n) => (
        <div
          key={n.id}
          className={`flex items-center justify-between p-4 rounded-xl border `}
        >
          <div className="flex items-center gap-4">
            <img
              src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${n.id}`}
              className="w-12 h-12 rounded-full object-cover mb-3"
            />
            <div>
              <p className="font-medium">
                {n.fromUser.firstName} {n.fromUser.lastName}
              </p>
              <p className="text-xs text-gray-500">14:00</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`text-xs ${n.read ? 'text-gray-400' : 'text-blue-700'}`}
            >
              {n.read ? 'Read' : 'Unread'}
            </span>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md">
              Check
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
