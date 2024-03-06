import { useMutation } from '@tanstack/react-query';

import { BOARD_GAMES_TIP_API_URL } from '@/constants/apiRoutes';

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
    url: `${BOARD_GAMES_TIP_API_URL}/${boardGameId}`,
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
