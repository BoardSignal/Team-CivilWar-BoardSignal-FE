import { GNB } from '@/components/GNB';
import usePostFCMToken from '@/hooks/usePostFCMToken';

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
