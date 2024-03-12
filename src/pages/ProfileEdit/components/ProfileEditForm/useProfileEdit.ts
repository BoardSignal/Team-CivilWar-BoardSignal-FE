import {
  ProfileEditRequest,
  usePostUserProfileEditApi,
} from '@/apis/userProfileEdit';
import { showErrorToast } from '@/utils/showToast';

import { OnProfileEdit } from '.';

const useProfileEdit = (onProfileEdit: OnProfileEdit) => {
  const userProfileEditApi = usePostUserProfileEditApi();

  return async (request: ProfileEditRequest) => {
    const { data, isBadRequest } = await userProfileEditApi(request);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    onProfileEdit(data.userId);
  };
};

export default useProfileEdit;
