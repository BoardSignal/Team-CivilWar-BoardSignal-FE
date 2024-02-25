import { useState } from 'react';

import Button from '@/components/Button';
import Label from '@/components/Label';
import TabBar from '@/components/TabBar';

import { useGameTip } from './hooks/useGameTip';

interface CreateTipPageProps {
  boardGameTitle: string;
}
const CreateTipPage = ({ boardGameTitle }: CreateTipPageProps) => {
  const [tipState, setTipState] = useState('');
  const { createGameTip } = useGameTip();

  return (
    <>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>{boardGameTitle}</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <div className='flex h-full flex-col gap-2 p-4'>
        <div>
          <Label
            title='공략 내용'
            isRequired={true}
            currentLength={tipState.length}
            maxLength={500}
          >
            <textarea
              className='h-[180px] resize-none overscroll-contain rounded-lg border border-gray-accent7 p-4 p-5 outline-none focus:border-gray-accent2'
              onChange={e => setTipState(e.target.value)}
            />
          </Label>
        </div>
        <Button
          className='mt-auto bg-primary py-2 text-white'
          onClick={() => {
            createGameTip({ boardGameId: '1', content: tipState });
          }}
        >
          완료
        </Button>
      </div>
    </>
  );
};

export default CreateTipPage;
