import { usePostKakaoLogin } from '@/apis/kakaoLogin';
import { usePostNaverLogin } from '@/apis/naverLogin';
import oauthKakao from '@/assets/oauth-kakao.png';

const LoginPage = () => {
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
      <div className='absolute bottom-[10px] mx-10 flex flex-col items-center justify-center'>
        <button className='my-2 h-full w-full' onClick={handleKakaoLogin}>
          <img src={oauthKakao} alt='kakao' />
        </button>
        <button onClick={handleNaverLogin} className='my-2 h-full w-full'>
          <img src={oauthKakao} alt='naver' className='h-[100%] w-[100%]' />
        </button>

        <h1 className='my-4 cursor-pointer'>회원가입 없이 둘러보기</h1>
      </div>
    </div>
  );
};
export default LoginPage;
