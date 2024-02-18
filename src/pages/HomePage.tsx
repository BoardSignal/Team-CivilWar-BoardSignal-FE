import { GNB } from '@/components/GNB';

export const HomePage = () => {
  return (
    <div className='flex h-screen flex-col'>
      <div className='grow'>
        <h1>HomePage</h1>
      </div>
      <GNB />
    </div>
  );
};
