import { useGetNotificationsApi } from '@/apis/notifications';
import EmptyListFullScreen from '@/components/EmptyListFullScreen';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import {
  EMPTY_NOTIFICATION_MESSAGE,
  EMPTY_NOTIFICATION_TITLE,
} from '@/constants/messages/emptyScreens';

import NotificationListItem from './NotificationListItem';

const NotificationList = () => {
  const { notificationsInfos, fetchStatus, hasNextPage, fetchNextPage } =
    useGetNotificationsApi();

  if (notificationsInfos.length === 0) {
    return (
      <EmptyListFullScreen
        title={EMPTY_NOTIFICATION_TITLE}
        message={EMPTY_NOTIFICATION_MESSAGE}
      />
    );
  }

  return (
    <InfiniteScrollAutoFetcher
      fetchStatus={fetchStatus}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      className='flex flex-col'
    >
      {notificationsInfos.map(({ notificationId, ...notification }) => (
        <NotificationListItem
          key={notificationId}
          notification={notification}
        />
      ))}
    </InfiniteScrollAutoFetcher>
  );
};

export default NotificationList;
