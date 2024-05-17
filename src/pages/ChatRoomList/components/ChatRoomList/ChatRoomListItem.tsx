import { Link } from 'react-router-dom';

import type { ChatRoom, LastChatMessage } from '@/apis/chatRoomList';
import defaultThumbnailImage from '@/assets/default-thumbnail-image.png';
import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { EMPTY_CHAT_ROOM_MESSAGE } from '@/constants/messages/emptyScreens';
import { CHATS_PAGE_URL } from '@/constants/pageRoutes';
import useSendChatMessage from '@/hooks/useSendChatMessage';
import { formatToTimeUntilTodayThenDate } from '@/utils/time';

interface ChatRoomListItemProps {
  chatRoom: ChatRoom;
}

const ChatRoomListItem = ({ chatRoom }: ChatRoomListItemProps) => {
  const { id, imageUrl, title, headCount, unreadChatCount, lastChatMessage } =
    chatRoom;

  const { lastMessage, unreadMessagesCount } = useSendChatMessage({
    gatheringId: id,
    rawLastChatMessage: lastChatMessage,
    unreadChatCount,
  });

  const getLastChatMessageText = (lastChatMessage: LastChatMessage) => {
    if (!lastChatMessage) {
      return EMPTY_CHAT_ROOM_MESSAGE;
    }

    const { messageType, content } = lastChatMessage;
    console.log(lastChatMessage);

    if (
      messageType === 'UNFIX' ||
      messageType === 'PARTICIPANT' ||
      messageType === 'EXIT'
    ) {
      return content.replace('님이', '참가자가');
    }

    return content;
  };

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
              <div className='flex items-center gap-1 text-start text-sm'>
                <span className='line-clamp-1'>{title}</span>
                <span className='text-xs text-gray-accent3'>{headCount}</span>
              </div>
              <div className='line-clamp-2 text-start text-xs text-gray-accent3'>
                {getLastChatMessageText(lastMessage as LastChatMessage)}
              </div>
            </div>
            {lastMessage && (
              <div className='flex shrink-0 flex-col items-center gap-1 text-[10px] text-gray-accent3'>
                <div>
                  {formatToTimeUntilTodayThenDate(lastMessage.createdAt)}
                </div>
                {unreadMessagesCount !== 0 && (
                  <Chip variant='fill'>{unreadMessagesCount}</Chip>
                )}
              </div>
            )}
          </div>
        </div>
      </Button>
    </Link>
  );
};

export default ChatRoomListItem;
