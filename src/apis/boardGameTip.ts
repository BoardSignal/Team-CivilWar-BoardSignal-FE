import { useMutation } from '@tanstack/react-query';

import {
  BOARD_GAMES_API_URL,
  BOARD_GAMES_TIP_API_URL,
} from '@/constants/apiRoutes';

import { api } from './core';

interface CreateBoardGameTipResponse {
  content: string;
}

const postBoardGameTip = (boardGameId: string, content: string) =>
  api.post<CreateBoardGameTipResponse>({
    url: `${BOARD_GAMES_TIP_API_URL}/${boardGameId}`,
    data: {
      content,
    },
  });

const deleteBoardGameTip = (tipId: number) =>
  api.delete({
    url: `${BOARD_GAMES_API_URL}/${tipId}`,
  });

export const usePostBoardGameTipApi = (boardGameId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: (content: string) => postBoardGameTip(boardGameId, content),
  });

  return mutateAsync;
};

export const useDeleteBoardGameTipApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: deleteBoardGameTip,
  });

  return mutateAsync;
};
