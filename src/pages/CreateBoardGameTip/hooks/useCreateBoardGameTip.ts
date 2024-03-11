import {
  type PostBoardGameTipRequest,
  usePostBoardGameTipApi,
} from '@/apis/boardGameTip';

export const useCreateBoardGameTip = () => {
  const postApi = usePostBoardGameTipApi();

  return {
    createBoardGameTip: async ({
      boardGameId,
      content,
    }: PostBoardGameTipRequest) => {
      await postApi({ boardGameId, content });
    },
  };
};
