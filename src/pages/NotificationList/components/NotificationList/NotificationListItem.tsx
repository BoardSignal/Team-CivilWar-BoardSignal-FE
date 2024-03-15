import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import { getRelativeTimeWithin } from '@/utils/time';

interface NotificationListItemProps {
  type: string;
  message: string;
  imageUrl: string | null;
  roomId: number | null;
  createdAt: string;
}

const NotificationListItem = ({
  type,
  message,
  imageUrl,
  roomId,
  createdAt,
}: NotificationListItemProps) => {
  return (
    <Link to={roomId ? `${GATHERINGS_PAGE_URL}/${roomId}` : ''}>
      <Button className='flex h-fit gap-4 rounded-none p-4'>
        <img
          src={imageUrl ?? ''}
          className='mt-1 h-12 w-12 rounded-full object-cover'
        />
        <div className='flex grow flex-col items-start gap-1'>
          <div className='flex w-full items-center justify-between'>
            <span className='text-sm text-gray-accent2'>{type}</span>
            <span className='text-xs text-gray-accent3'>
              {getRelativeTimeWithin(createdAt)}
            </span>
          </div>
          <div className='text-gray-accent1'>{message}</div>
        </div>
      </Button>
    </Link>
  );
};

export default NotificationListItem;
