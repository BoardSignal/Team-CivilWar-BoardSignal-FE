import { useNavigate } from 'react-router-dom';

import { useLogoutApi } from '@/apis/logout';

export const useLogout = () => {
  const api = useLogoutApi();
  const navigate = useNavigate();

  return {
    logout: async () => {
      try {
        await api();
        localStorage.removeItem('accessToken');
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    },
  };
};
