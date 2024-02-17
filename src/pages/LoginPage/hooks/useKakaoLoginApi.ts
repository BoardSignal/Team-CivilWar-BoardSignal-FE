import { useNavigate } from 'react-router-dom';

import { usePostKakaoLogin } from '@/apis/kakaoLogin';

export const useKakaoLoginApi = () => {
  const api = usePostKakaoLogin();
  const navigate = useNavigate();

  return {
    login: async () => {
      try {
        const { accessToken, isJoined } = await api();
        localStorage.setItem('accessToken', accessToken);
        if (!isJoined) return navigate('/signIn');
        navigate('/main');
      } catch (error) {
        console.error(error);
      }
    },
  };
};
