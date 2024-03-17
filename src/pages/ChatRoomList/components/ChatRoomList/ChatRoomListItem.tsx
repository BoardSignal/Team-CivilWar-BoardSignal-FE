import { Link } from 'react-router-dom';

import type { ChatRoom } from '@/apis/chatRoomList';
import { useGetChatRoomMessagesApi } from '@/apis/chatRoomMessages';
import defaultThumbnailImage from '@/assets/default-thumbnail-image.png';
import Button from '@/components/Button';
import { CHATS_PAGE_URL } from '@/constants/pageRoutes';
import { formatToTimeUntilTodayThenDate } from '@/utils/time';

interface ChatRoomListItemProps {
  chatRoom: ChatRoom;
}

const ChatRoomListItem = ({ chatRoom }: ChatRoomListItemProps) => {
  const { id, imageUrl, title, headCount } = chatRoom;

  const { lastChatMessage } = useGetChatRoomMessagesApi(id, 10);

  return (
    <Link to={`${CHATS_PAGE_URL}/${id}`}>
      <Button className='h-fit w-full justify-start'>
        <div className='flex w-full gap-4 px-4 py-2'>
          <img
            src={imageUrl ?? defaultThumbnailImage}
            alt={title}
            className='size-16 rounded-lg object-cover'
          />
          <div className='flex h-full grow items-start gap-8'>
            <div className='flex grow flex-col items-start gap-1'>
              <div className='flex items-center gap-1 text-sm'>
                <span>{title}</span>
                <span className='text-xs text-gray-accent3'>{headCount}</span>
              </div>
              <div className='line-clamp-2 text-start text-xs text-gray-accent3'>
                {lastChatMessage?.content}
              </div>
            </div>
            {lastChatMessage && (
              <div className='shrink-0 text-[10px] text-gray-accent3'>
                {formatToTimeUntilTodayThenDate(lastChatMessage.createAt)}
              </div>
            )}
          </div>
        </div>
      </Button>
    </Link>
  );
};

export default ChatRoomListItem;
