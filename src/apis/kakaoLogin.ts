import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import api from './core';

interface LoginResponse {
  accessToken: string;
  signed: boolean;
}

const postKakaoLogin = () => {
  return api.post<LoginResponse>({ url: '/api/v1/auth/login/kakao' });
};

export const usePostKakaoLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postKakaoLogin,
    onSuccess: data => {
      localStorage.setItem('accessToken', data.accessToken);
      if (!data.signed) {
        navigate('/signIn');
      } else {
        navigate('/main');
      }
    },
  });
};
