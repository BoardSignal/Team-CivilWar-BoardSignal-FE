import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { ROOMS_CHATS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export interface Message {
  userId: number;
  nickname: string;
  userImageUrl: string | null;
  content: string;
  type: string;
  createAt: string;
}

interface ChatRoomMessagesResponse {
  chatList: Message[];
  currentPageNumber: number;
  size: number;
  hasNext: boolean;
}

const getChatRoomMessages = (gatheringId: number, size: number, page: number) =>
  api.get<ChatRoomMessagesResponse>({
    url: `${ROOMS_CHATS_API_URL}/${gatheringId}`,
    params: { size, page },
  });

export const useGetChatRoomMessagesApi = (
  gatheringId: number,
  size: number,
) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['chats', gatheringId],
      queryFn: ({ pageParam }) =>
        getChatRoomMessages(gatheringId, size, pageParam),
      initialPageParam: 0,
      getNextPageParam: ({ hasNext, currentPageNumber }) =>
        hasNext ? currentPageNumber + 1 : undefined,
    });

  return {
    messages: data.pages
      .map(({ chatList }) => [...chatList])
      .flat()
      .reverse(),
    recentChat: data.pages.flat()[0].chatList[0],
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
