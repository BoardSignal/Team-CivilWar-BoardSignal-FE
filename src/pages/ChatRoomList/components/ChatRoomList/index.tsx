import { useGetChatRoomListApi } from '@/apis/chatRoomList';
import EmptyListFullScreen from '@/components/EmptyListFullScreen';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';
import {
  EMPTY_CHAT_ROOM_LIST_MESSAGE,
  EMPTY_CHAT_ROOM_LIST_TITLE,
} from '@/constants/messages/emptyScreens';
import useGetLoggedInUserId from '@/hooks/useGetLoggedInUserId';

import ChatRoomListItem from './ChatRoomListItem';

const ChatRoomList = () => {
  const currentUserId = useGetLoggedInUserId();
  const { chatRooms, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetChatRoomListApi(10, currentUserId);

  if (chatRooms.length === 0) {
    return (
      <EmptyListFullScreen
        title={EMPTY_CHAT_ROOM_LIST_TITLE}
        message={EMPTY_CHAT_ROOM_LIST_MESSAGE}
      />
    );
  }
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
            <ChatRoomListItem chatRoom={chatRoom} />
          </li>
        ))}
      </ul>
    </InfiniteScrollAutoFetcher>
  );
};

export default ChatRoomList;
