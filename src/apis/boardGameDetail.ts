import { useQuery } from '@tanstack/react-query';

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
  myTip: MyTip;
  tips: Tip[];
}

export interface MyTip {
  tipId: number;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  content: string;
  likeCount: number;
}

export interface Tip {
  tipId: number;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  content: string;
  likeCount: number;
}

const GET_BOARD_GAME_DETAIL_URL = '/board-games';

const getBoardGameDetail = (boardGameId: string) =>
  api.get<BoardGameDetailResponse>({
    url: `${GET_BOARD_GAME_DETAIL_URL}/${boardGameId}`,
  });

export const useGetBoardGameDetailApi = (boardGameId: string) =>
  useQuery({
    queryFn: () => getBoardGameDetail(boardGameId),
    queryKey: ['boardGameDetail', boardGameId],
  });
