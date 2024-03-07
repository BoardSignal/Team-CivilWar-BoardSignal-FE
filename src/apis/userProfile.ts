import { useQuery } from '@tanstack/react-query';

import { USERS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export interface UserProfileResponse {
  nickname: string;
  signal: number;
  preferCategories: string[];
  gender: string;
  ageGroup: string;
  profileImageUrl: string;
  mannerScore: number;
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

export const useGetUserProfilesApi = (userId: string) =>
  useQuery({
    queryFn: () => getUserProfile(userId),
    queryKey: ['profiles', userId],
  });
