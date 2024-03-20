import { useGetChatRoomMessagesApi } from '@/apis/chatRoomMessages';
import ReverseInfiniteScrollAutoFetch from '@/components/ReverseInfiniteScrollAutoFetch';
import { EMPTY_CHAT_ROOM_MESSAGE } from '@/constants/messages/emptyScreens';
import { isDifferentDay } from '@/utils/time';

import ChatAlert from './ChatAlert';
import ChatBubble, { ChatDate } from './ChatBubble';

interface ChatContainerProps {
  gatheringId: number;
}

const ChatContainer = ({ gatheringId }: ChatContainerProps) => {
  const { messages, hasNextPage, fetchNextPage } = useGetChatRoomMessagesApi(
    gatheringId,
    20,
  );

  if (messages.length === 0) {
    return (
      <div className='flex grow items-center justify-center text-gray-accent3'>
        {EMPTY_CHAT_ROOM_MESSAGE}
      </div>
    );
  }

  return (
    <ReverseInfiniteScrollAutoFetch
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      className='flex grow flex-col-reverse overflow-y-auto overflow-x-hidden p-4'
      fetchedData={messages}
    >
      {messages.map((message, index) => {
        const { userId, type, createdAt } = message;

        if (type !== 'CHAT') {
          return (
            <>
              {index === messages.length - 1 ? (
                <div key={createdAt}>
                  <ChatDate date={createdAt} />
                  <ChatAlert message={message} />
                </div>
              ) : (
                <ChatAlert key={createdAt} message={message} />
              )}
            </>
          );
        }

        if (index === messages.length - 1) {
          return (
            <div key={createdAt}>
              <ChatDate date={createdAt} />
              <ChatBubble isFirstMessage message={message} />
            </div>
          );
        }

        return (
          <div key={createdAt}>
            {isDifferentDay(createdAt, messages[index + 1].createdAt) ? (
              <div>
                <ChatDate date={createdAt} />
                <ChatBubble message={message} isFirstMessage />
              </div>
            ) : (
              <ChatBubble
                message={message}
                isFirstMessage={messages[index + 1]?.userId !== userId}
              />
            )}
          </div>
        );
      })}
    </ReverseInfiniteScrollAutoFetch>
  );
};

export default ChatContainer;
