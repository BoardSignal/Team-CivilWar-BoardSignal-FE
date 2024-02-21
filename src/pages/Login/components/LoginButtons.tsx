import { useNavigate } from 'react-router-dom';

import kakaoLoginButtonImage from '@/assets/kakao-login-button.png';
import Button from '@/components/Button';

import { useKakaoLogin } from '../hooks/useKakaoLogin';
import { useNaverLogin } from '../hooks/useNaverLogin';

// 53.7px로 높이를 지정하는 이유는 원본 이미지의 크기가 그렇기 때문이에요.
const KAKAO_LOGIN_BUTTON_HEIGHT = 'h-[53.7px]';

export const KakaoLoginButton = () => {
  const { kakaoLogin } = useKakaoLogin();

  return (
    <Button onClick={kakaoLogin} className={KAKAO_LOGIN_BUTTON_HEIGHT}>
      <img src={kakaoLoginButtonImage} alt='네이버 로그인 버튼' />
    </Button>
  );
};

export const NaverLoginButton = () => {
  const { naverLogin } = useNaverLogin();

  return (
    <Button onClick={naverLogin} className={KAKAO_LOGIN_BUTTON_HEIGHT}>
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

  return (
    <Button onClick={goToMain} className={KAKAO_LOGIN_BUTTON_HEIGHT}>
      회원가입 없이 둘러보기
    </Button>
  );
};
