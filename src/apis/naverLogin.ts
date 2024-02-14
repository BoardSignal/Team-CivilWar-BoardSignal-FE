import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import api from './core';

interface LoginResponse {
  accessToken: string;
  signed: boolean;
}
export const postNaverLogin = () => {
  return api.post<LoginResponse>({ url: '/api/v1/auth/login/naver' });
};

export const usePostNaverLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postNaverLogin,
    onSuccess: data => {
      localStorage.setItem('accessToken', data.accessToken);
      if (!data.signed) {
        navigate('/signIn');
      } else {
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/main');
      }
    },
  });
};
