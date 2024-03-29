import { ComponentPropsWithRef } from 'react';

import { Link } from 'react-router-dom';

import type { ChatMessage } from '@/apis/chatRoomMessages';
import defaultProfileImage from '@/assets/default-profile-image.png';
import { USERS_PAGE_URL } from '@/constants/pageRoutes';
import useGetLoggedInUserId from '@/hooks/useGetLoggedInUserId';
import { cn } from '@/utils/cn';
import { formatToDate, formatToTime } from '@/utils/time';

interface ChatBubbleProps {
  message: ChatMessage;
  isFirstMessage?: boolean;
}

interface BasicChatBubbleProps extends ComponentPropsWithRef<'div'> {
  message: ChatMessage;
  isMessageOwner?: boolean;
}

export const ChatDate = ({ date }: { date: string }) => (
  <div className='w-full py-4 text-center text-[10px] font-bold text-gray-accent2'>
    {formatToDate(date)}
  </div>
);

const BasicChatBubble = ({
  message,
  isMessageOwner = false,
  className,
}: BasicChatBubbleProps) => {
  const { content, createdAt } = message;

  return (
    <div
      className={cn(
        'mb-1 flex items-end gap-1',
        isMessageOwner && 'flex-row-reverse',
        className,
      )}
    >
      <div className='max-w-52 whitespace-pre-wrap break-words rounded-lg bg-gray-accent7 p-2 text-xs text-gray-accent1'>
        {content}
      </div>
      <div className=' text-[10px]'>{formatToTime(createdAt)}</div>
    </div>
  );
};

const ChatBubbleWithAvatar = ({ message }: ChatBubbleProps) => {
  const { userId, nickname, userImageUrl } = message;

  return (
    <div className='mt-1 flex gap-2'>
      <Link to={`${USERS_PAGE_URL}/${userId}`}>
        <img
          src={userImageUrl ?? defaultProfileImage}
          alt={nickname}
          className='size-10 rounded-full object-cover'
        />
      </Link>
      <div>
        <div className='text-[10px] font-bold text-gray-accent2'>
          {nickname}
        </div>
        <BasicChatBubble message={message} />
      </div>
    </div>
  );
};

const OtherUserChatBubble = ({ message, isFirstMessage }: ChatBubbleProps) => (
  <div>
    {isFirstMessage ? (
      <ChatBubbleWithAvatar message={message} />
    ) : (
      <BasicChatBubble message={message} className='ml-12' />
    )}
  </div>
);

const ChatBubble = ({ message, isFirstMessage = false }: ChatBubbleProps) => {
  const { userId } = message;
  const currentUserId = useGetLoggedInUserId();

  return (
    <div>
      {currentUserId === userId ? (
        <BasicChatBubble message={message} isMessageOwner />
      ) : (
        <OtherUserChatBubble
          message={message}
          isFirstMessage={isFirstMessage}
        />
      )}
    </div>
  );
};

export default ChatBubble;
