import { useNavigate } from 'react-router-dom';

import { usePostNaverLogin } from '@/apis/naverLogin';

export const useNaverLoginApi = () => {
  const api = usePostNaverLogin();
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
