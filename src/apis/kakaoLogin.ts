import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import api from './core';

interface SignedUser {
  signed: true;
  accessToken: string;
  uuid: string;
}

interface UnSignedUser {
  signed: false;
  userData: string;
}

type LoginResponse = SignedUser | UnSignedUser;

const postKakaoLogin = () => {
  return api.post<LoginResponse>({ url: '/api/v1/auth/login/kakao' });
};

export const usePostKakaoLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postKakaoLogin,
    onSuccess: data => {
      if (!data.signed) {
        navigate('/signIn');
        // TODO : data.userData를 signIn 페이지로 넘기는 작업을 추가해야 함
      } else {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('uuid', data.uuid);
        navigate('/main');
      }
    },
  });
};
