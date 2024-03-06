import { useSuspenseQuery } from '@tanstack/react-query';

import { AUTH_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export interface LoggedInUserResponse {
  id: number;
  email: string;
  nickName: string;
  age: number;
  ageGroup: string;
  gender: string;
  isJoined: boolean;
}

const getLoggedInUser = () =>
  api.get<LoggedInUserResponse>({
    url: AUTH_API_URL,
  });

export const useGetLoggedInUserApi = () =>
  useSuspenseQuery({
    queryKey: ['loggedInUser'],
    queryFn: getLoggedInUser,
  });
