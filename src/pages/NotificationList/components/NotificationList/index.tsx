import { useGetNotificationsApi } from '@/apis/notifications';

import NotificationListItem from './NotificationListItem';

const EmptyNotificationList = () => <div>EMPTY!!</div>;

const NotificationList = () => {
  const { notificationsInfos } = useGetNotificationsApi();

  if (notificationsInfos.length === 0) {
    return <EmptyNotificationList />;
  }

  return (
    <div className='flex flex-col'>
      {notificationsInfos.map(notification => (
        <NotificationListItem
          key={notification.notificationId}
          {...notification}
        />
      ))}
    </div>
  );
};

export default NotificationList;
