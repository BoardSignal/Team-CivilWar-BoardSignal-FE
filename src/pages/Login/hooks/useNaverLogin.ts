import { useNavigate } from 'react-router-dom';

import { usePostNaverLogin } from '@/apis/naverLogin';

export const useNaverLogin = () => {
  const api = usePostNaverLogin();
  const navigate = useNavigate();

  return {
    naverLogin: async () => {
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
