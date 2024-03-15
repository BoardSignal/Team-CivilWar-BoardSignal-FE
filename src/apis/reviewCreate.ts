import { useMutation } from '@tanstack/react-query';

import { REVIEWS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface ReviewContent {
  content: string;
  reviewScore: string;
}

interface ReviewCreateResponse {
  reviewIds: number[];
}

export interface ReviewCreateRequest {
  reviews: {
    revieweeId: number;
    reviewContent: ReviewContent[];
  }[];
}

const postReviewCreate = ({ reviews }: ReviewCreateRequest) => {
  return api.post<ReviewCreateResponse>({
    url: REVIEWS_API_URL,
    data: reviews,
  });
};

export const useReviewCreateApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postReviewCreate,
  });

  return mutateAsync;
};
