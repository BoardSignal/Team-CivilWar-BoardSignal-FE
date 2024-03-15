import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { ROOMS_CHATS_MY_GAMES_API_URL } from '@/constants/apiRoutes';
import { CHAT_LIST_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

interface ChatRoom {
  id: number;
  title: string;
  imageUrl: string | null;
  headCount: number;
}

interface ChatListResponse {
  roomsInfos: ChatRoom[];
  currentPageNumber: number;
  size: number;
  hasNext: true;
}

const getChatList = (size: number, page: number) =>
  api.get<ChatListResponse>({
    url: ROOMS_CHATS_MY_GAMES_API_URL,
    params: { size, page },
  });

export const useGetChatListApi = (size: number, userId: number) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [CHAT_LIST_QUERY_KEY, userId],
      queryFn: ({ pageParam }) => getChatList(size, pageParam),
      initialPageParam: 0,
      getNextPageParam: ({ hasNext, currentPageNumber }) =>
        hasNext ? currentPageNumber + 1 : undefined,
    });

  return {
    chatRooms: data.pages.map(({ roomsInfos }) => [...roomsInfos]).flat(),
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
