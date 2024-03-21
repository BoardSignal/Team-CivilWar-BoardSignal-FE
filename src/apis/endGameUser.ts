import { useSuspenseQuery } from '@tanstack/react-query';

import { ROOMS_END_GAME_API_URL } from '@/constants/apiRoutes';
import { END_GAME_USER_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export interface ParticipantInfo {
  userId: number;
  nickname: string;
  ageGroup: string;
  profileImageUrl: string | null;
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
  participantsInfos: ParticipantInfo[];
}

interface EndGameDetailsWithoutParticipants
  extends Omit<EndGameDetailsResponse, 'participantsInfos'> {}

const endGameDetailMapper = (gathering: EndGameDetailsWithoutParticipants) => {
  const {
    id,
    title,
    station,
    minAge,
    maxAge,
    allowedGender,
    imageUrl,
    minParticipants,
    maxParticipants,
    categories,
    createdAt,
    meetingTime,
    meetingPlace,
    headCount,
  } = gathering;

  return {
    id,
    title,
    fixStation: station,
    minAge,
    maxAge,
    allowedGender,
    imageUrl,
    minParticipants,
    maxParticipants,
    categories,
    createdAt,
    fixTime: meetingTime,
    fixPlace: meetingPlace,
    headCount,
  };
};

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
    gathering: endGameDetailMapper(gathering),
  };
};
