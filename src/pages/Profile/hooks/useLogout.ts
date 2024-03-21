import { useNavigate } from 'react-router-dom';

import { useLogoutApi } from '@/apis/logout';
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';

export const useLogout = () => {
  const api = useLogoutApi();
  const navigate = useNavigate();

  return {
    logoutApi: async () => {
      await api();
      localStorage.removeItem(STORAGE_KEY_ACCESS_TOKEN);
      navigate('/', { replace: true });
    },
  };
};
