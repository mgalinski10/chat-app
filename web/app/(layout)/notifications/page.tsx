import Card from '@/components/Card/Card';
import NotificationList from '@/components/NotificationList/NotificationList';

const NotificationPage = () => {
  return (
    <Card>
      <p className="text-lg font-semibold mb-5">Notifications</p>
      <div>
        <NotificationList />
      </div>
    </Card>
  );
};

export default NotificationPage;
