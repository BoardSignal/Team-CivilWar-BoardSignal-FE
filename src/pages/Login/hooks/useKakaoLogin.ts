import { useNavigate } from 'react-router-dom';

import { usePostKakaoLogin } from '@/apis/kakaoLogin';

export const useKakaoLogin = () => {
  const api = usePostKakaoLogin();
  const navigate = useNavigate();

  return {
    kakaoLogin: async () => {
      try {
        const { accessToken, isJoined } = await api();
        localStorage.setItem('accessToken', accessToken);
        navigate(isJoined ? '/' : '/sign-up');
      } catch (error) {
        console.error(error);
      }
    },
  };
};
