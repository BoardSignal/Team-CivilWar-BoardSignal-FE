import { useNavigate } from 'react-router-dom';

import { usePostNaverLoginApi } from '@/apis/naverLogin';
import { REGISTER_PAGE_URL } from '@/constants/pageRoutes';

export const useNaverLogin = () => {
  const api = usePostNaverLoginApi();
  const navigate = useNavigate();

  return {
    naverLogin: async () => {
      try {
        const { accessToken, isJoined } = await api();
        localStorage.setItem('accessToken', accessToken);
        navigate(isJoined ? '/' : REGISTER_PAGE_URL);
      } catch (error) {
        console.error(error);
      }
    },
  };
};
