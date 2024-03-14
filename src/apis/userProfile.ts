import { useSuspenseQuery } from '@tanstack/react-query';

import { USERS_API_URL } from '@/constants/apiRoutes';
import { PROFILES_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface UserProfileResponse {
  nickname: string;
  signal: number;
  preferCategories: string[];
  gender: string;
  ageGroup: string;
  profileImageUrl: string;
  signalTemperature: number;
  reviews: Review[];
  wishCount: number;
  isProfileManager: boolean;
}

export interface Review {
  content: string;
  score: number;
}

const getUserProfile = (userId: string) =>
  api.get<UserProfileResponse>({
    url: `${USERS_API_URL}/${userId}`,
  });

export const useGetUserProfilesApi = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryFn: () => getUserProfile(userId),
    queryKey: [PROFILES_QUERY_KEY, userId],
  });

  return data;
};
