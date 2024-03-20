import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import qs from 'qs';

import { BOARD_GAMES_WISH_API_URL } from '@/constants/apiRoutes';
import { BOARD_GAME_WISH_LIST_QUERY_KEY } from '@/constants/queryKey';

import type { BoardGameListItemResponse } from './boardGameList';
import { api } from './core';

interface BoardGameWishListResponse {
  boardGamesInfos: BoardGameListItemResponse[];
  currentPageNumber: number;
  size: number;
  hasNext: true;
}

const getBoardGameWishList = (userId: string, size: number, page: number) =>
  api.get<BoardGameWishListResponse>({
    url: `${BOARD_GAMES_WISH_API_URL}/${userId}`,
    params: { size, page },
    paramsSerializer: params => qs.stringify(params, { indices: false }),
  });

export const useGetBoardGameWishListApi = (
  userId: string,
  size: number = 20,
) => {
  const { data, hasNextPage, fetchNextPage, fetchStatus } =
    useSuspenseInfiniteQuery({
      queryKey: [BOARD_GAME_WISH_LIST_QUERY_KEY, userId],
      queryFn: ({ pageParam }) => getBoardGameWishList(userId, size, pageParam),
      initialPageParam: 0,
      getNextPageParam: ({ hasNext, currentPageNumber }) =>
        hasNext ? currentPageNumber + 1 : undefined,
    });

  const allPagesMerged = data.pages.flatMap(
    ({ boardGamesInfos }) => boardGamesInfos,
  );

  return {
    fetchStatus,
    hasNextPage,
    fetchNextPage,
    boardGamesInfos: allPagesMerged,
  };
};
