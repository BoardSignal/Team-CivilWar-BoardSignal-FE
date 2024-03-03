import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface CreateTipResponse {
  content: string;
}

export interface CreateTipRequest {
  boardGameId: string;
  content: string;
}

export const postBoardGameTip = ({
  boardGameId,
  content,
}: CreateTipRequest) => {
  return api.post<CreateTipResponse>({
    url: `board-games/tip/${boardGameId}`,
    data: {
      content,
    },
  });
};

export const usePostBoardGameTipApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postBoardGameTip,
  });

  return mutateAsync;
};
