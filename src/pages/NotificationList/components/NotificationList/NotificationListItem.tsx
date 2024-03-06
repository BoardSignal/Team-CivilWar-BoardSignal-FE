import { useNavigate } from 'react-router-dom';

import { Notification } from '@/apis/notifications';
import NotificationReviewThumbnail from '@/assets/notification-thumbnail-review.png';
import Button from '@/components/Button';

const NotificationListItem = ({
  thumbnailUrl = NotificationReviewThumbnail,
  type,
  message,
  link,
  createdAt,
}: Notification) => {
  const navigate = useNavigate();

  const navigateIfPossible = () => {
    link && navigate(link);
  };

  return (
    <Button onClick={navigateIfPossible} className='flex h-fit gap-4 p-4'>
      <img src={thumbnailUrl} alt='' className='mt-1 h-12 w-12 rounded-full' />
      <div className='flex grow flex-col gap-1'>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-accent2'>{type}</span>
          <span className='text-xs text-gray-accent3'>{createdAt}</span>
        </div>
        <div className='text-gray-accent1'>{message}</div>
      </div>
    </Button>
  );
};

export default NotificationListItem;
