import { usePostKakaoLogin } from '@/apis/kakaoLogin';
import { usePostNaverLogin } from '@/apis/naverLogin';
import oauthKakao from '@/assets/oauth-kakao.png';

export const LoginPage = () => {
  const { mutate: mutateKakao } = usePostKakaoLogin();
  const { mutate: mutateNaver } = usePostNaverLogin();
  const handleKakaoLogin = () => {
    mutateKakao();
  };

  const handleNaverLogin = () => {
    mutateNaver();
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
