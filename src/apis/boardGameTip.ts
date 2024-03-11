import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  BOARD_GAMES_API_URL,
  BOARD_GAMES_TIP_API_URL,
} from '@/constants/apiRoutes';

import { api } from './core';

interface PostBoardGameTipResponse {
  content: string;
}

export interface PostBoardGameTipRequest {
  boardGameId: string;
  content: string;
}

export interface DeleteBoardGameTipRequest {
  tipId: number;
}

export const postBoardGameTip = ({
  boardGameId,
  content,
}: PostBoardGameTipRequest) =>
  api.post<PostBoardGameTipResponse>({
    url: `${BOARD_GAMES_TIP_API_URL}/${boardGameId}`,
    data: {
      content,
    },
  });

const deleteBoardGameTip = ({ tipId }: DeleteBoardGameTipRequest) =>
  api.delete({
    url: `${BOARD_GAMES_API_URL}/${tipId}`,
  });

export const usePostBoardGameTipApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postBoardGameTip,
  });

  return mutateAsync;
};

export const useDeleteBoardGameTipApi = (boardGameId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: deleteBoardGameTip,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['board-game-detail', boardGameId],
      }),
  });

  return mutateAsync;
};
