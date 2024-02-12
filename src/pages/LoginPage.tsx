import { useNavigate } from 'react-router-dom';

import oauthKakao from '@/assets/oauth/oauth-kakao.png';
import { API } from '@/utils/api';
import { setCookie } from '@/utils/cookie';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleKakaoLogin = async () => {
    const response = await API.kakaoLogin();
    if (response.signed) {
      setCookie('accessToken', response.accessToken);
      setCookie('refreshToken', response.refreshTokenIndex);
    } else {
      navigate('/signIn');
    }
  };

  const handleNaverLogin = async () => {
    const response = await API.naverLogin();
    if (response.signed) {
      setCookie('accessToken', response.accessToken);
      setCookie('refreshToken', response.refreshTokenIndex);
    } else {
      navigate('/signIn');
    }
  };

  return (
    <div className='relative h-screen w-full min-w-[350px] max-w-[450px] shadow-xl'>
      <h1>Login Page</h1>
      <div className='absolute bottom-[10px] flex flex-col items-center justify-center'>
        <img
          src={oauthKakao}
          className='my-2 h-full w-full cursor-pointer px-10'
          onClick={handleKakaoLogin}
          alt='kakao'
        />
        <img
          src={oauthKakao}
          className='my-2 h-full w-full cursor-pointer px-10'
          onClick={handleNaverLogin}
          alt='naver'
        />
        <h1 className='my-4 cursor-pointer'>회원가입 없이 둘러보기</h1>
      </div>
    </div>
  );
};
