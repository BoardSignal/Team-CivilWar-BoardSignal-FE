import { ReviewCreateRequest, useReviewCreateApi } from '@/apis/reviewCreate';
import { showErrorToast } from '@/utils/showToast';

export const useReviewCreate = () => {
  const postReviewCreateApi = useReviewCreateApi();

  return async (revieweeId: ReviewCreateRequest, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await postReviewCreateApi(revieweeId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};
