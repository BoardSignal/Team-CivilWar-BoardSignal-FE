import { usePostBoardGameTipApi } from '@/apis/boardGameTip';
import { CreateTipRequest } from '@/apis/boardGameTip';

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
