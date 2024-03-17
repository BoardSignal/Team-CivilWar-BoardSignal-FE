import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { ROOMS_CHATS_MY_GAMES_API_URL } from '@/constants/apiRoutes';
import { CHAT_LIST_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface ChatRoom {
  id: number;
  title: string;
  imageUrl: string | null;
  headCount: number;
}

interface ChatRoomListResponse {
  roomsInfos: ChatRoom[];
  currentPageNumber: number;
  size: number;
  hasNext: true;
}

const getChatRoomList = (size: number, page: number) =>
  api.get<ChatRoomListResponse>({
    url: ROOMS_CHATS_MY_GAMES_API_URL,
    params: { size, page },
  });

export const useGetChatRoomListApi = (size: number, userId: number) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [CHAT_LIST_QUERY_KEY, userId],
      queryFn: ({ pageParam }) => getChatRoomList(size, pageParam),
      initialPageParam: 0,
      getNextPageParam: ({ hasNext, currentPageNumber }) =>
        hasNext ? currentPageNumber + 1 : undefined,
    });

  return {
    chatRooms: data.pages.map(({ roomsInfos }) => roomsInfos).flat(),
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
