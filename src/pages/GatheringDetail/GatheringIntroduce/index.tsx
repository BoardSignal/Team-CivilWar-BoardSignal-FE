import { useState } from 'react';

import TabBar from '@/components/TabBar';

import GatheringDescription from './components/GatheringDescription';
import GatheringGuide from './components/GatheringGuide';
import TabMenu from './components/TabMenu';

interface GatheringIntroduceProps {
  imageUrl?: string | null;
}

const DEFAULT_IMAGE_URL = 'https://picsum.photos/200/200';

const GATHERING_INTRO_DUMMY_DATA = {
  gatheringGuide: {
    time: '토요일 오후',
    startTime: '',
    place: '사당역 근처 레드버튼',
    subwayStation: '사당역',
    minParticipants: 1,
    maxParticipants: 8,
    categories: ['전략게임', '워게임'],
    allowedGender: '남성',
    maxAge: 21,
    minAge: 28,
  },
  title: '정령섬 심화 격주로 하실 1~2분',
  description: '예전보다 소개팅도 줄어들고~',
  isLeader: false,
  imageUrl: DEFAULT_IMAGE_URL,
};

const GatheringIntroduce = ({ imageUrl }: GatheringIntroduceProps) => {
  const { title, description, gatheringGuide } = GATHERING_INTRO_DUMMY_DATA;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
        <TabBar.Right>
          <TabBar.ShareButton />
        </TabBar.Right>
      </TabBar.Container>

      <div>
        <TabMenu
          tabs={['모임 소개', '참가자 ()']}
          onSelectTab={handleTabSelect}
        />
        {activeTab === 0 && (
          <div className='overflow-y-auto'>
            {imageUrl && (
              <img
                src={imageUrl}
                alt='모임 이미지'
                className='h-[350px] w-full object-cover'
              />
            )}

            <div className='flex flex-col gap-4 px-4 py-6'>
              <GatheringDescription title={title} description={description} />
              <GatheringGuide gatheringGuide={gatheringGuide} />
            </div>
          </div>
        )}
        {activeTab === 1 && <div>{/* 참가자 프로필*/}</div>}
      </div>
    </div>
  );
};

export default GatheringIntroduce;
