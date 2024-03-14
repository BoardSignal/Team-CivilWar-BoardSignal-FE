import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import qs from 'qs';

import { ROOMS_FILTER_API_URL } from '@/constants/apiRoutes';

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

interface GatheringListResponse {
  roomsInfos: Gathering[];
  size: number;
  hasNext: boolean;
}
export interface GetGatheringListParams {
  size: number;
  station: string[];
  time: string[];
  category: string[];
  gender?: string;
}

const getGatheringList = ({ size, ...restParams }: GetGatheringListParams) =>
  api.get<GatheringListResponse>({
    url: ROOMS_FILTER_API_URL,
    params: {
      size,
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
      queryKey: ['gatherings', restParams],
      queryFn: ({ pageParam = size }) =>
        getGatheringList({
          size: pageParam,
          ...restParams,
        }),
      initialPageParam: size,
      getNextPageParam: ({ size: currentSize, hasNext }) =>
        hasNext ? currentSize + size : undefined,
    });

  return {
    data: data.pages.flat()[data.pages.length - 1] || [],
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
