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

  const [firstMessage] = messages.slice(0);

  return (
    <ReverseInfiniteScrollAutoFetch
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      className='flex grow flex-col overflow-y-auto p-4'
      data={messages}
    >
      <div>
        <ChatDate date={firstMessage.createAt} />
        <ChatBubble message={firstMessage} />
      </div>

      {messages.map((message, index) => {
        if (index === 0) {
          return;
        }

        return (
          <div key={message.createAt}>
            {isDifferentDay(message.createAt, messages[index - 1].createAt) && (
              <ChatDate date={message.createAt} />
            )}
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
