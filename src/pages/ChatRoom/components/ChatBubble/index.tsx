import { ComponentPropsWithRef } from 'react';

import type { Message } from '@/apis/chatRoomMessages';
import defaultProfileImage from '@/assets/default-profile-image.png';
import useGetLoggedInUserId from '@/hooks/useGetLoggedInUserId';
import { cn } from '@/utils/cn';
import { getFullDate, getShortTime } from '@/utils/time';

interface ChatBubbleProps {
  message: Message;
  isContinued?: boolean;
}

interface BasicChatBubbleProps extends ComponentPropsWithRef<'div'> {
  message: Message;
  isCurrentUser?: boolean;
}

export const ChatDate = ({ date }: { date: string }) => (
  <div className='w-full py-4 text-center text-[10px] font-bold text-gray-accent2'>
    {getFullDate(date)}
  </div>
);

const BasicChatBubble = ({
  message,
  isCurrentUser = false,
  className,
}: BasicChatBubbleProps) => {
  const { content, createAt } = message;

  return (
    <div
      className={cn(
        'mb-1 flex items-end gap-1',
        isCurrentUser && 'flex-row-reverse',
        className,
      )}
    >
      <div className='w-max max-w-52 break-keep rounded-lg bg-gray-accent7 p-2 text-xs text-gray-accent1'>
        {content}
      </div>
      <div className=' text-[10px]'>{getShortTime(createAt)}</div>
    </div>
  );
};

const OtherUserChatBubble = ({ message, isContinued }: ChatBubbleProps) => {
  const { nickname, userImageUrl } = message;

  return (
    <div>
      {!isContinued ? (
        <div className='mt-1 flex gap-2'>
          <img
            src={userImageUrl ?? defaultProfileImage}
            alt={nickname}
            className='size-10 rounded-full object-cover'
          />
          <div>
            <div className='text-[10px] font-bold text-gray-accent2'>
              {nickname}
            </div>
            <BasicChatBubble message={message} />
          </div>
        </div>
      ) : (
        <BasicChatBubble message={message} className='ml-12' />
      )}
    </div>
  );
};

const ChatBubble = ({ message, isContinued = false }: ChatBubbleProps) => {
  const { userId } = message;
  const currentUserId = useGetLoggedInUserId();

  return (
    <div>
      {currentUserId === userId ? (
        <BasicChatBubble message={message} isCurrentUser />
      ) : (
        <OtherUserChatBubble message={message} isContinued={isContinued} />
      )}
    </div>
  );
};

export default ChatBubble;
