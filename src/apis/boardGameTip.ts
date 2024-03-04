import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface CreateTipResponse {
  content: string;
}

export interface CreateTipRequest {
  boardGameId: string;
  content: string;
}

const postBoardGameTip = ({ boardGameId, content }: CreateTipRequest) =>
  api.post<CreateTipResponse>({
    url: `board-games/tip/${boardGameId}`,
    data: {
      content,
    },
  });

const deleteBoardGameTip = ({ tipId }: { tipId: number }) =>
  api.delete({
    url: `board-games/${tipId}`,
  });

export const usePostBoardGameTipApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postBoardGameTip,
  });

  return mutateAsync;
};

export const useDeleteBoardGameTipApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: deleteBoardGameTip,
  });

  return mutateAsync;
};
