import { useSuspenseQuery } from '@tanstack/react-query';

import { BOARD_GAMES_API_URL } from '@/constants/apiRoutes';
import { BOARD_GAME_DETAIL_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface BoardGameDetailResponse {
  boardGameId: number;
  name: string;
  description: string;
  categories: string[];
  difficulty: string;
  minParticipants: number;
  maxParticipants: number;
  fromPlayTime: number;
  toPlayTime: number;
  wishCount: number;
  imageUrl: string;
  isWished: boolean;
  myTip: Tip | null;
  tips: Tip[];
}

export interface Tip {
  tipId: number;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
}

const getBoardGameDetail = (boardGameId: string) =>
  api.get<BoardGameDetailResponse>({
    url: `${BOARD_GAMES_API_URL}/${boardGameId}`,
  });

export const useGetBoardGameDetailApi = (boardGameId: string) => {
  const { data } = useSuspenseQuery({
    queryFn: () => getBoardGameDetail(boardGameId),
    queryKey: [BOARD_GAME_DETAIL_QUERY_KEY, boardGameId],
  });

  return data;
};
