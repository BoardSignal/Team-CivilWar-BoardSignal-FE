import { useMutation } from '@tanstack/react-query';

import { USERS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface UserProfile {
  nickName: string;
  categories: string[];
  line: string;
  station: string;
}

interface ProfileEditResponse {
  userId: number;
}

export interface ProfileEditRequest {
  profileImageUrl: File;
  userProfile: UserProfile;
}

const postUserProfileEdit = ({
  profileImageUrl,
  userProfile,
}: ProfileEditRequest) => {
  const formData = new FormData();

  formData.append('image', profileImageUrl);
  formData.append(
    'data',
    new Blob([JSON.stringify({ ...userProfile })], {
      type: 'application/json',
    }),
  );

  return api.post<ProfileEditResponse>({
    url: USERS_API_URL,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const usePostUserProfileEditApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postUserProfileEdit,
  });

  return mutateAsync;
};
