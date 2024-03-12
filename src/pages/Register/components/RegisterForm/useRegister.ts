import {
  ProfileEditRequest,
  usePostUserProfileEditApi,
} from '@/apis/userProfileEdit';
import { showErrorToast } from '@/utils/showToast';

import { OnRegister } from '.';

const useRegister = (onRegister: OnRegister) => {
  const userProfileEditApi = usePostUserProfileEditApi();

  return async (request: ProfileEditRequest) => {
    const { data, isBadRequest } = await userProfileEditApi(request);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    onRegister();
  };
};

export default useRegister;
