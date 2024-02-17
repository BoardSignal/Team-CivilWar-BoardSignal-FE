import { useNavigate } from 'react-router-dom';

import { usePostKakaoLogin } from '@/apis/kakaoLogin';

export const useKakaoLoginApi = () => {
  const api = usePostKakaoLogin();
  const navigate = useNavigate();

  return {
    kakaoLogin: async () => {
      try {
        const { accessToken, isJoined } = await api();
        localStorage.setItem('accessToken', accessToken);
        return isJoined ? navigate('/main') : navigate('/signIn');
      } catch (error) {
        console.error(error);
      }
    },
  };
};
