import { useSuspenseQuery } from '@tanstack/react-query';

import { ROOMS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface Participant {
  userId: number;
  nickname: string;
  ageGroup: string;
  profileImageUrl: string | null;
  isLeader: boolean;
  mannerScore: number;
}

export interface GatheringDetailResponse {
  id: number;
  title: string;
  description: string;
  time: string;
  startTime: string | null;
  subwayLine: string;
  subwayStation: string;
  place: string | null;
  minAge: number;
  maxAge: number;
  minParticipant: number;
  maxParticipant: number;
  imageUrl: string | null;
  isLeader: boolean;
  isFix: '확정' | '미확정';
  allowedGender: string;
  categories: string[];
  participantResponse: Participant[];
}

const getGatheringDetail = (gatheringId: string) =>
  api.get<GatheringDetailResponse>({
    url: `${ROOMS_API_URL}/${gatheringId}`,
  });

export const useGetGatheringDetailApi = (gatheringId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['gathering-detail', gatheringId],
    queryFn: () => getGatheringDetail(gatheringId),
  });

  return data;
};
