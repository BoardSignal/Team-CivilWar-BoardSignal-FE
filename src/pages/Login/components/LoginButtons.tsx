import { useNavigate } from 'react-router-dom';

import kakaoLoginButtonImage from '@/assets/kakao-login-button.png';
import Button from '@/components/Button';

import { useKakaoLogin } from '../hooks/useKakaoLogin';
import { useNaverLogin } from '../hooks/useNaverLogin';

export const KakaoLoginButton = () => {
  const { kakaoLogin } = useKakaoLogin();

  return (
    <Button onClick={kakaoLogin}>
      <img src={kakaoLoginButtonImage} alt='네이버 로그인 버튼' />
    </Button>
  );
};

export const NaverLoginButton = () => {
  const { naverLogin } = useNaverLogin();

  return (
    <Button onClick={naverLogin}>
      <img src={kakaoLoginButtonImage} alt='카카오 로그인 버튼' />
    </Button>
  );
};

export const SkipLoginButton = () => {
  const navigate = useNavigate();

  // Ripple 효과가 나오기 전에 이동이 되어서 setTimeout을 사용해요.
  const goToMain = () => {
    setTimeout(() => {
      navigate('/');
    }, 200);
  };

  return <Button onClick={goToMain}>회원가입 없이 둘러보기</Button>;
};
