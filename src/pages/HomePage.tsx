import { GNB } from '@/components/GNB';
import useFcmToken from '@/hooks/useFcmToken';

export const HomePage = () => {
  useFcmToken();
  return (
    <div className='flex h-screen flex-col'>
      <div className='grow'>
        <h1>HomePage</h1>
      </div>
      <GNB />
    </div>
  );
};
