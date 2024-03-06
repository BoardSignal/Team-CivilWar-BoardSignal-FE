import { useNavigate } from 'react-router-dom';

import { usePostKakaoLoginApi } from '@/apis/kakaoLogin';
import { REGISTER_PAGE_URL } from '@/constants/pageRoutes';

export const useKakaoLogin = () => {
  const api = usePostKakaoLoginApi();
  const navigate = useNavigate();

  return {
    kakaoLogin: async () => {
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
