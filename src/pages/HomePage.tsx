import { GNB } from '@/components/GNB';
import useInitializeFCM from '@/hooks/useInitializeFCM';

export const HomePage = () => {
  useInitializeFCM();
  return (
    <div className='flex h-screen flex-col'>
      <div className='grow'>
        <h1>HomePage</h1>
      </div>
      <GNB />
    </div>
  );
};
