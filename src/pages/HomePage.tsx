import { GNB } from '@/components/GNB';
import usePostFCMToken from '@/hooks/useInitializeFCM';

export const HomePage = () => {
  usePostFCMToken();
  return (
    <div className='flex h-screen flex-col'>
      <div className='grow'>
        <h1>HomePage</h1>
      </div>
      <GNB />
    </div>
  );
};
