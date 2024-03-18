import { useSuspenseQuery } from '@tanstack/react-query';

import { ROOMS_API_URL } from '@/constants/apiRoutes';
import { GATHERING_DETAIL_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface ParticipantResponse {
  userId: number;
  nickname: string;
  ageGroup: string;
  profileImageUrl: string | null;
  isLeader: boolean;
  signalTemperature: number;
}

export interface GatheringDetailResponse {
  roomId: number;
  title: string;
  description: string;
  time: string;
  startTime: string | null;
  subwayLine: string;
  subwayStation: string;
  place: string | null;
  minAge: number;
  maxAge: number;
  minParticipants: number;
  maxParticipants: number;
  imageUrl: string | null;
  isLeader: boolean;
  isFix: '확정' | '미확정';
  allowedGender: '남성' | '여성' | '혼성';
  categories: string[];
  participantResponse: ParticipantResponse[];
  createdAt: string;
}

const gatheringListItemResponseMapper = (data: GatheringDetailResponse) => {
  const {
    roomId,
    imageUrl,
    title,
    description,
    time,
    subwayLine,
    subwayStation,
    minAge,
    maxAge,
    allowedGender,
    minParticipants,
    maxParticipants,
    categories,
    participantResponse,
    createdAt,
  } = data;

  return {
    id: roomId,
    imageUrl,
    title,
    description,
    time,
    station: `${subwayStation}(${subwayLine})`,
    minAge,
    maxAge,
    allowedGender,
    minParticipants,
    maxParticipants,
    categories,
    headCount: participantResponse.length,
    createdAt,
  };
};

const getGatheringDetail = (gatheringId: string) =>
  api.get<GatheringDetailResponse>({
    url: `${ROOMS_API_URL}/${gatheringId}`,
  });

export const useGetGatheringDetailApi = (gatheringId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [GATHERING_DETAIL_QUERY_KEY, gatheringId],
    queryFn: () => getGatheringDetail(gatheringId),
  });

  return {
    gathering: data,
    gatheringListItem: gatheringListItemResponseMapper(data),
  };
};
