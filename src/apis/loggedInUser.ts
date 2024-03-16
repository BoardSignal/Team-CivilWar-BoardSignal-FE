import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { AUTH_API_URL } from '@/constants/apiRoutes';
import { LOGGED_IN_USER_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface LoggedInUserResponse {
  id: number;
  email: string;
  name: string;
  nickname: string;
  birth: number;
  age: number;
  ageGroup: string;
  subwayLine: string;
  subwayStation: string;
  categories: string[];
  gender: string;
  isJoined: boolean;
}

const getLoggedInUser = () =>
  api.get<LoggedInUserResponse>({
    url: AUTH_API_URL,
  });

export const useGetLoggedInUserApi = () => {
  const { data } = useSuspenseQuery({
    queryKey: [LOGGED_IN_USER_QUERY_KEY],
    queryFn: getLoggedInUser,
  });

  return data;
};

// Suspense를 사용해서 데이터를 조회하는 경우 응답이 400번대일 때 throw에러가 발생해서 useQuery를 사용하였습니다.
export const useGetIsJoinedUserApi = (accessToken: string | null) =>
  useQuery({
    queryKey: ['logged-in-user'],
    queryFn: getLoggedInUser,
    enabled: !!accessToken,
    throwOnError: true,
  });
