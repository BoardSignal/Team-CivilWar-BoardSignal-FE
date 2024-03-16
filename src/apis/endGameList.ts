import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { ROOMS_MY_END_GAMES_API_URL } from '@/constants/apiRoutes';
import { END_GAME_LIST_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';
import type { GatheringListResponse } from './gatheringList';

const getEndGameList = (size: number, page: number) =>
  api.get<GatheringListResponse>({
    url: ROOMS_MY_END_GAMES_API_URL,
    params: { size, page },
  });

export const useGetEndGameListApi = (size: number, userId: number) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [END_GAME_LIST_QUERY_KEY, userId],
      queryFn: ({ pageParam }) => getEndGameList(size, pageParam),
      initialPageParam: 0,
      getNextPageParam: ({ hasNext, currentPageNumber }) =>
        hasNext ? currentPageNumber + 1 : undefined,
    });

  return {
    endGames: data.pages.map(({ roomsInfos }) => [...roomsInfos]).flat(),
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
