import { useGetChatRoomMessagesApi } from '@/apis/chatRoomMessages';
import ReverseInfiniteScrollAutoFetch from '@/components/ReverseInfiniteScrollAutoFetch';
import { isDifferentDay } from '@/utils/time';

import ChatBubble, { ChatDate } from '../ChatBubble';

interface ChatContainerProps {
  gatheringId: number;
}

const ChatContainer = ({ gatheringId }: ChatContainerProps) => {
  const { messages, hasNextPage, fetchNextPage } = useGetChatRoomMessagesApi(
    gatheringId,
    20,
  );

  if (messages.length === 0) {
    return <div className='grow'></div>;
  }

  return (
    <ReverseInfiniteScrollAutoFetch
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      className='flex grow flex-col overflow-y-auto overflow-x-hidden p-4'
      data={messages}
    >
      {messages.map((message, index) => {
        if (index === 0) {
          return (
            <div>
              <ChatDate date={message.createdAt} />
              <ChatBubble isFirstMessage message={message} />
            </div>
          );
        }

        return (
          <div key={message.createdAt}>
            {isDifferentDay(
              message.createdAt,
              messages[index - 1].createdAt,
            ) && <ChatDate date={message.createdAt} />}
            <ChatBubble
              message={message}
              isFirstMessage={messages[index - 1]?.userId !== message.userId}
            />
          </div>
        );
      })}
    </ReverseInfiniteScrollAutoFetch>
  );
};

export default ChatContainer;
