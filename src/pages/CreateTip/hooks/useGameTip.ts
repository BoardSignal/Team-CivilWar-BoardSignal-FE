import { usePostGameTip } from '@/apis/createTip';
import { CreateTipRequest } from '@/apis/createTip';

export const useGameTip = () => {
  const api = usePostGameTip();

  return {
    createGameTip: async ({ boardGameId, content }: CreateTipRequest) => {
      try {
        await api({ boardGameId, content });
      } catch (error) {
        console.error(error);
      }
    },
  };
};
