import { useQuery } from '@tanstack/react-query';

import { USERS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface UserProfileResponse {
  nickname: string;
  signal: number;
  categories: string[];
  gender: string;
  ageGroup: string;
  profileImageUrl: string;
  mannerScore: number;
  reviews: Review[];
  wishCount: number;
}

export interface Review {
  content: string;
  reviewScore: number;
}

const getUserProfile = (userId: string) => {
  api.get<UserProfileResponse>({
    url: `${USERS_API_URL}/${userId}`,
  });
};

export const useGetUserProfilesApi = (userId: string) =>
  useQuery({
    queryFn: () => getUserProfile(userId),
    queryKey: ['profiles', userId],
  });
