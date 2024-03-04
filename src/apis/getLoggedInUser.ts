import { useSuspenseQuery } from '@tanstack/react-query';

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

const GET_LOGGED_IN_USER_URL = '/auth';

const getLoggedInUser = () =>
  api.get<LoggedInUserResponse>({
    url: GET_LOGGED_IN_USER_URL,
  });

export const useGetLoggedInUserApi = () =>
  useSuspenseQuery({
    queryKey: ['loggedInUser'],
    queryFn: getLoggedInUser,
  });
