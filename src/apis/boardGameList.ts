import { useSuspenseQuery } from '@tanstack/react-query';
import qs from 'qs';

import { BoardGameCategories } from '@/constants/options';
import { BOARD_GAMES_PAGE_URL } from '@/constants/pageRoutes';
import { BOARD_GAME_LIST_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface BoardGameListItemResponseDTO {
  boardGameId: number;
  name: string;
  categories: BoardGameCategories[];
  difficulty: string;
  minParticipants: number;
  maxParticipants: number;
  fromPlayTime: number;
  toPlayTime: number;
  wishCount: number;
  imageUrl: string | null;
}

interface BoardGameListResponseDTO {
  boardGamesInfos: BoardGameListItemResponseDTO[];
  currentPageNumber: number;
  size: number;
  hasNext: true;
}

interface BoardGameListFilterOptions {
  difficulty?: string;
  categories?: string[];
  playTime?: number;
  searchKeyword?: string;
}

const getBoardGameList = (options: BoardGameListFilterOptions) =>
  api.get<BoardGameListResponseDTO>({
    url: BOARD_GAMES_PAGE_URL,
    params: options,
    // indices 옵션에 따라 아래와 같이 변환돼요.
    // indices=true(기본) --> 'a[0]=b&a[1]=c&a[2]=d'
    // indices=false      --> 'a=b&a=c&a=d'
    paramsSerializer: params => qs.stringify(params, { indices: false }),
  });

export const useGetBoardGameListApi = (options: BoardGameListFilterOptions) => {
  const {
    data: { boardGamesInfos },
  } = useSuspenseQuery({
    queryKey: [BOARD_GAME_LIST_QUERY_KEY, options],
    queryFn: () => getBoardGameList(options),
  });

  return boardGamesInfos;
};
