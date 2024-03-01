import { usePostBoardGameTipApi } from '@/apis/postBoardGameTip';
import { CreateTipRequest } from '@/apis/postBoardGameTip';

export const useCreateBoardGameTip = () => {
  const api = usePostBoardGameTipApi();

  return {
    createBoardGameTip: async ({ boardGameId, content }: CreateTipRequest) => {
      try {
        await api({ boardGameId, content });
      } catch (error) {
        console.error(error);
      }
    },
  };
};
