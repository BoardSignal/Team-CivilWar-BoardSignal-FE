import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import qs from 'qs';

import { ROOMS_FILTER_API_URL } from '@/constants/apiRoutes';
import { GATHERINGS_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface Gathering {
  id: number;
  title: string;
  description: string;
  station: string;
  time: string;
  minAge: number;
  maxAge: number;
  allowedGender: string;
  imageUrl: string | null;
  minParticipants: number;
  maxParticipants: number;
  categories: string[];
  createdAt: string;
  headCount: number;
}

export interface GatheringListResponse {
  roomsInfos: Gathering[];
  currentPageNumber: number;
  size: number;
  hasNext: boolean;
}

export interface GetGatheringListParams {
  size: number;
  page?: number;
  station: string[];
  time: string[];
  category: string[];
  gender?: string;
}

const getGatheringList = ({
  size,
  page,
  ...restParams
}: GetGatheringListParams) =>
  api.get<GatheringListResponse>({
    url: ROOMS_FILTER_API_URL,
    params: {
      size,
      page,
      ...restParams,
    },
    paramsSerializer: params => qs.stringify(params, { indices: false }),
  });

export const useGetGatheringListApi = ({
  size,
  ...restParams
}: GetGatheringListParams) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [GATHERINGS_QUERY_KEY, restParams],
      queryFn: ({ pageParam }) =>
        getGatheringList({
          size,
          ...restParams,
          page: pageParam,
        }),
      initialPageParam: 0,
      getNextPageParam: ({ hasNext, currentPageNumber }) =>
        hasNext ? currentPageNumber + 1 : undefined,
    });

  return {
    gatherings: data.pages.map(({ roomsInfos }) => roomsInfos).flat(),
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
