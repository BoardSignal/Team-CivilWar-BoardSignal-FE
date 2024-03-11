import { useSuspenseQuery } from '@tanstack/react-query';

import { BOARD_GAMES_API_URL } from '@/constants/apiRoutes';

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

interface BoardGameDetailRequest {
  boardGameId: string;
}
const getBoardGameDetail = ({ boardGameId }: BoardGameDetailRequest) =>
  api.get<BoardGameDetailResponse>({
    url: `${BOARD_GAMES_API_URL}/${boardGameId}`,
  });

export const useGetBoardGameDetailApi = ({
  boardGameId,
}: BoardGameDetailRequest) =>
  useSuspenseQuery({
    queryFn: () => getBoardGameDetail({ boardGameId }),
    queryKey: ['board-game-detail', boardGameId],
  });
