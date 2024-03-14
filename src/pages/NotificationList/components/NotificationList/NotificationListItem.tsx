import { useNavigate } from 'react-router-dom';

import { Notification, NotificationType } from '@/apis/notifications';
import Button from '@/components/Button';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import { getRelativeTimeWithin } from '@/utils/time';

const notificationTitleMap = {
  지역매칭: '신규 모임',
  강퇴: '모임 추방',
  '매칭 확정': '모임 확정',
  '방 삭제': '모임 취소',
  리뷰: '리뷰 ',
};

const getType = (title: NotificationType, roomId: number | null) => {
  return title === '리뷰'
    ? roomId
      ? '리뷰 요청'
      : '리뷰 도착'
    : notificationTitleMap[title];
};

const NotificationListItem = ({
  body,
  imageUrl,
  roomId,
  title,
  createdAt,
}: Notification) => {
  const navigate = useNavigate();

  const navigateToRoom = () => {
    roomId && navigate(`${GATHERINGS_PAGE_URL}/${roomId}`);
  };

  const type = getType(title, roomId);

  return (
    <Button onClick={navigateToRoom} className='flex h-fit gap-4 p-4'>
      <img
        src={imageUrl ?? ''}
        alt=''
        className='mt-1 h-12 w-12 rounded-full object-cover'
      />
      <div className='flex grow flex-col items-start gap-1'>
        <div className='flex w-full items-center justify-between'>
          <span className='text-sm text-gray-accent2'>{type}</span>
          <span className='text-xs text-gray-accent3'>
            {/* 현재 createdAt 필드가 없서서 해줘야 하는 처리. PR 시 제거 예정 */}
            {getRelativeTimeWithin(createdAt ?? new Date().toISOString())}
          </span>
        </div>
        <div className='text-gray-accent1'>{body}</div>
      </div>
    </Button>
  );
};

export default NotificationListItem;
