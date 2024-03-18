import { useMutation } from '@tanstack/react-query';

import { REVIEWS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface ReviewContent {
  content: string;
  reviewScore: string;
}

export interface ReviewCreate {
  reviews: {
    revieweeId: number;
    reviewContent: ReviewContent[];
  }[];
}

interface ReviewCreateRequest extends ReviewCreate {
  gatheringId: string;
}

const postReviewCreate = ({ reviews, gatheringId }: ReviewCreateRequest) => {
  return api.post({
    url: `${REVIEWS_API_URL}/${gatheringId}`,
    data: { reviews },
  });
};

export const useReviewCreateApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postReviewCreate,
  });

  return mutateAsync;
};
