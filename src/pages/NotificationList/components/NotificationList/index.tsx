import { useGetNotificationsApi } from '@/apis/notifications';

import NotificationListItem from './NotificationListItem';

const EmptyNotificationList = () => <div>EMPTY!!</div>;

const NotificationList = () => {
  const notifications = useGetNotificationsApi();

  if (notifications.length === 0) {
    return <EmptyNotificationList />;
  }

  return (
    <div className='flex flex-col'>
      {notifications.map(notification => (
        <NotificationListItem {...notification} />
      ))}
    </div>
  );
};

export default NotificationList;
