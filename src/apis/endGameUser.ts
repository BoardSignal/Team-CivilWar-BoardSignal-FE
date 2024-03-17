import { useSuspenseQuery } from '@tanstack/react-query';

import { ROOMS_END_GAME_API_URL } from '@/constants/apiRoutes';
import { END_GAME_USER_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface ParticipantInfo {
  userId: number;
  nickname: string;
  ageGroup: string;
  profileImageUrl?: string | null;
  isLeader: boolean;
  signalTemperature: number;
}

export interface EndGameDetailsResponse {
  id: number;
  title: string;
  meetingTime: string;
  peopleCount: number;
  imageUrl: string | null;
  line: string;
  station: string;
  meetingPlace: string;
  allowedGender: string;
  minAge: number;
  maxAge: number;
  minParticipants: number;
  maxParticipants: number;
  categories: string[];
  createdAt: string;
  headCount: number;
  time: '';
  description: '';
  participantsInfos: ParticipantInfo[];
}

const getEndGameDetails = (gatheringId: string) =>
  api.get<EndGameDetailsResponse>({
    url: `${ROOMS_END_GAME_API_URL}/${gatheringId}`,
  });

export const useGetEndGameDetailsApi = (gatheringId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [END_GAME_USER_QUERY_KEY, gatheringId],
    queryFn: () => getEndGameDetails(gatheringId),
  });

  const { participantsInfos, ...gathering } = data;

  return {
    participantsInfos,
    gathering: { ...gathering, imageUrl: null },
    gatheringId: gathering.id,
  };
};
