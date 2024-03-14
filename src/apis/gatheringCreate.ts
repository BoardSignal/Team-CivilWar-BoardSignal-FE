import { useMutation } from '@tanstack/react-query';

import { ROOMS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface Gathering {
  title: string;
  description: string;
  minParticipants: number;
  maxParticipants: number;
  day: string;
  time: string;
  startTime: string;
  minAge: number;
  maxAge: number;
  subwayLine: string;
  subwayStation: string;
  place: string;
  categories: string[];
  isAllowedOppositeGender: boolean;
}

interface GatheringCreateResponse {
  roomId: number;
}

export interface GatheringCreateRequest {
  imageFile: File;
  gathering: Gathering;
}

export const postGatheringCreate = ({
  imageFile,
  gathering,
}: GatheringCreateRequest) => {
  const formData = new FormData();

  formData.append('image', imageFile);
  formData.append(
    'data',
    new Blob([JSON.stringify({ ...gathering })], {
      type: 'application/json',
    }),
  );

  return api.post<GatheringCreateResponse>({
    url: ROOMS_API_URL,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const usePostGatheringCreateApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postGatheringCreate,
  });

  return mutateAsync;
};
