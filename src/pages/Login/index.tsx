import kakaoLoginButtonImage from '@/assets/kakao-login-button.png';

import { useKakaoLogin } from './hooks/useKakaoLogin';
import { useNaverLogin } from './hooks/useNaverLogin';

const LoginPage = () => {
  const { kakaoLogin } = useKakaoLogin();
  const { naverLogin } = useNaverLogin();

  return (
    <>
      <h1>Login Page</h1>
      <div className='absolute bottom-[10px] mx-10 flex flex-col items-center justify-center gap-[10px]'>
        <button className='h-full w-full' onClick={naverLogin}>
          <img src={kakaoLoginButtonImage} alt='kakao' />
        </button>
        <button onClick={kakaoLogin} className='h-full w-full'>
          <img
            src={kakaoLoginButtonImage}
            alt='naver'
            className='h-[100%] w-[100%]'
          />
        </button>
        <h1 className='my-4 cursor-pointer'>회원가입 없이 둘러보기</h1>
      </div>
    </>
  );
};
export default LoginPage;
