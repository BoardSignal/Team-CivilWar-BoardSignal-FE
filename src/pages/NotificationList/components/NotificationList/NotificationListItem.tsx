import { Link } from 'react-router-dom';

import defaultThumbnailImage from '@/assets/default-thumbnail-image.png';
import Button from '@/components/Button';
import { getRelativeTimeWithin } from '@/utils/time';

interface NotificationListItemProps {
  notification: {
    type: string;
    message: string;
    navigateUrl: string;
    imageUrl: string | null;
    createdAt: string;
  };
}

const NotificationListItem = ({
  notification: { type, message, imageUrl, navigateUrl, createdAt },
}: NotificationListItemProps) => {
  return (
    <Link to={navigateUrl}>
      <Button className='flex h-fit gap-4 rounded-none border-b border-gray-accent7 p-4'>
        <img
          src={imageUrl ?? defaultThumbnailImage}
          className='mt-1 h-12 w-12 rounded-full object-cover'
        />
        <div className='flex grow flex-col items-start gap-1'>
          <div className='flex w-full items-center justify-between'>
            <span className='text-sm text-gray-accent2'>{type}</span>
            <span className='text-xs text-gray-accent3'>
              {getRelativeTimeWithin(createdAt)}
            </span>
          </div>
          <div className='text-start text-gray-accent1'>{message}</div>
        </div>
      </Button>
    </Link>
  );
};

export default NotificationListItem;
