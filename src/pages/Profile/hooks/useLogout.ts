import { useNavigate } from 'react-router-dom';

import { useLogoutApi } from '@/apis/logout';

export const useLogout = () => {
  const api = useLogoutApi();
  const navigate = useNavigate();

  return {
    logoutApi: async () => {
      await api();
      localStorage.removeItem('accessToken');
      navigate('/');
    },
  };
};
