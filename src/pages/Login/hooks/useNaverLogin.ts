import { useNavigate } from 'react-router-dom';

import { usePostNaverLoginApi } from '@/apis/naverLogin';

export const useNaverLogin = () => {
  const api = usePostNaverLoginApi();
  const navigate = useNavigate();

  return {
    naverLogin: async () => {
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
