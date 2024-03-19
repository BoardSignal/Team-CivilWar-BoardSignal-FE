import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { ROOMS_CHATS_API_URL } from '@/constants/apiRoutes';
import { CHATS_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export type MessageType =
  | 'FIX'
  | 'UNFIX'
  | 'PARTICIPANT'
  | 'EXIT'
  | 'CHAT'
  | 'KICK';

export interface ChatMessage {
  userId: number;
  nickname: string;
  userImageUrl: string | null;
  content: string;
  type: MessageType;
  createdAt: string;
  isChecked: boolean;
}

interface ChatMessagesResponse {
  chatList: ChatMessage[];
  currentPageNumber: number;
  size: number;
  hasNext: boolean;
}

const getChatMessagesByGatheringId = (
  gatheringId: number,
  size: number,
  page: number,
) =>
  api.get<ChatMessagesResponse>({
    url: `${ROOMS_CHATS_API_URL}/${gatheringId}`,
    params: { size, page },
  });

export const useGetChatRoomMessagesApi = (
  gatheringId: number,
  size: number,
) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [CHATS_QUERY_KEY, gatheringId],
      queryFn: ({ pageParam }) =>
        getChatMessagesByGatheringId(gatheringId, size, pageParam),
      initialPageParam: 0,
      getNextPageParam: ({ hasNext, currentPageNumber }) =>
        hasNext ? currentPageNumber + 1 : undefined,
    });

  const messages = data.pages.map(({ chatList }) => chatList).flat();

  return {
    messages,
    lastChatMessage: messages[0],
    uncheckedMessagesCount: messages.filter(({ isChecked }) => !isChecked)
      .length,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
