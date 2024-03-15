import { useGetNotificationsApi } from '@/apis/notifications';
import EmptyListFullScreen from '@/components/EmptyListFullScreen';
import {
  EMPTY_NOTIFICATION_MESSAGE,
  EMPTY_NOTIFICATION_TITLE,
} from '@/constants/messages/emptyScreens';

import NotificationListItem from './NotificationListItem';

const NotificationList = () => {
  const { notificationsInfos } = useGetNotificationsApi();

  if (notificationsInfos.length === 0) {
    return (
      <EmptyListFullScreen
        title={EMPTY_NOTIFICATION_TITLE}
        message={EMPTY_NOTIFICATION_MESSAGE}
      />
    );
  }

  return (
    <div className='flex flex-col'>
      {notificationsInfos.map(({ notificationId, ...props }) => (
        <NotificationListItem key={notificationId} {...props} />
      ))}
    </div>
  );
};

export default NotificationList;
