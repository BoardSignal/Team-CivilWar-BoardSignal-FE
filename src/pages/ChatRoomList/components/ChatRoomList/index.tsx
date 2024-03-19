import { useGetChatRoomListApi } from '@/apis/chatRoomList';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';
import useGetLoggedInUserId from '@/hooks/useGetLoggedInUserId';

import ChatRoomListItem from './ChatRoomListItem';

const ChatRoomList = () => {
  const currentUserId = useGetLoggedInUserId();
  const { chatRooms, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetChatRoomListApi(10, currentUserId);

  return (
    <InfiniteScrollAutoFetcher
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      fetchStatus={isFetchingNextPage ? 'fetching' : 'idle'}
      loaderElement={<SpinnerListBottom />}
      className='grow overflow-y-auto overflow-x-hidden'
    >
      <ul>
        {chatRooms?.map(chatRoom => (
          <li key={chatRoom.id}>
            <ChatRoomListItem chatRoom={chatRoom} />
          </li>
        ))}
      </ul>
    </InfiniteScrollAutoFetcher>
  );
};

export default ChatRoomList;
