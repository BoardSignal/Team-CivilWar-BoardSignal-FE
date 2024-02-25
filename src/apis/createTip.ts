import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface CreateTipResponse {
  content: string;
}
export interface CreateTipRequest {
  boardGameId: string;
  content: string;
}

export const postGameTip = ({ boardGameId, content }: CreateTipRequest) => {
  return api.post<CreateTipResponse>({
    url: `board-games/tip/${boardGameId}`,
    data: {
      content,
    },
  });
};

export const usePostGameTip = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postGameTip,
  });

  return mutateAsync;
};
