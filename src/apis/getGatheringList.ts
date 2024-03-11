import { useSuspenseQuery } from '@tanstack/react-query';
import qs from 'qs';

import { ROOMS_FILTER_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface Gathering {
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
  gender: string;
}

const getGatheringList = ({
  size,
  station,
  time,
  category,
  gender,
}: GetGatheringListParams) =>
  api.get<GatheringListResponse>({
    url: ROOMS_FILTER_API_URL,
    params: {
      size,
      station,
      time,
      category,
      gender,
    },
    paramsSerializer: params => qs.stringify(params, { indices: false }),
  });

export const useGetGatheringListApi = ({
  size,
  station,
  time,
  category,
  gender,
}: GetGatheringListParams) => {
  const { data } = useSuspenseQuery({
    queryKey: ['gatherings', size, station, time, category, gender],
    queryFn: () => getGatheringList({ size, station, time, category, gender }),
  });

  return data;
};
