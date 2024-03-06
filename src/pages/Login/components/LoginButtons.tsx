import { Link } from 'react-router-dom';

import kakaoLoginButtonImage from '@/assets/kakao-login-button.png';
import Button from '@/components/Button';

// 53.7px로 높이를 지정하는 이유는 원본 이미지의 크기가 그렇기 때문이에요.
const KAKAO_LOGIN_BUTTON_HEIGHT = 'h-[53.7px]';

export const KakaoLoginButton = () => {
  return (
    <Link to={`${import.meta.env.VITE_KAKAO_LOGIN_URL}`}>
      <Button className={KAKAO_LOGIN_BUTTON_HEIGHT}>
        <img src={kakaoLoginButtonImage} alt='네이버 로그인 버튼' />
      </Button>
    </Link>
  );
};

export const SkipLoginButton = () => {
  return (
    <Link to='/' className='w-full'>
      <Button className={KAKAO_LOGIN_BUTTON_HEIGHT}>
        회원가입 없이 둘러보기
      </Button>
    </Link>
  );
};
