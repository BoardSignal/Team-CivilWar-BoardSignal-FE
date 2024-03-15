import { useGetChatListApi } from '@/apis/chatList';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';
import useGetLoggedInUserId from '@/hooks/useGetLoggedInUserId';

import ChatListItem from './ChatListItem';

export interface ChatRoom {
  id: number;
  imageUrl: string | null;
  title: string;
  headCount: number;
}

const ChatList = () => {
  const currentUserId = useGetLoggedInUserId();
  const { chatRooms, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetChatListApi(10, currentUserId);

  return (
    <InfiniteScrollAutoFetcher
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      fetchStatus={isFetchingNextPage ? 'fetching' : 'idle'}
      loaderElement={<SpinnerListBottom />}
      className='grow overflow-y-auto'
    >
      <ul>
        {chatRooms?.map(chatRoom => (
          <li key={chatRoom.id}>
            <ChatListItem chatRoom={chatRoom} />
          </li>
        ))}
      </ul>
    </InfiniteScrollAutoFetcher>
  );
};

export default ChatList;
