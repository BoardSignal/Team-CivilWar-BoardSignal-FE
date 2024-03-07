import logoImage from '@/assets/logo.png';
import TabBar from '@/components/TabBar';
import {
  SLOGAN_MESSAGE1,
  SLOGAN_MESSAGE2,
} from '@/constants/messages/boardSignal';

import {
  KakaoLoginButton,
  NaverLoginButton,
  SkipLoginButton,
} from './components/LoginButtons';

const LoginPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.GoBackButton />
      </TabBar.Container>
      <div className='flex h-full flex-col items-center justify-center gap-2'>
        <img src={logoImage} alt='보드시그널 로고' />
        <div>
          <p className='text-primary'>{SLOGAN_MESSAGE1}</p>
          <p className='text-primary'>{SLOGAN_MESSAGE2}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <NaverLoginButton />
        <KakaoLoginButton />
        <SkipLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
