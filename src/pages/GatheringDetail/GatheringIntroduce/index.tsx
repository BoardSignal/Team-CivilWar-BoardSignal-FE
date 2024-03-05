import TabBar from '@/components/TabBar';

import GatheringDescription from './components/GatheringDescription';
import GatheringGuide from './components/GatheringGuide';

interface GatheringIntroduceProps {
  imageUrl?: string;
}

const DEFAULT_IMAGE_URL = 'https://picsum.photos/200/200';

const GATHERING_INTRO_DUMMY_DATA = {
  gatheringGuide: {
    startTime: '토요일 오후',
    place: '사당역 근처 레드버튼',
    minParticipants: 1,
    maxParticipants: 8,
    categories: ['전략게임', '워게임'],
    isAllowedAppositeGender: '혼성',
    maxAge: 21,
    minAge: 28,
  },
  title: '정령섬 심화 격주로 하실 1~2분',
  description: '예전보다 소개팅도 줄어들고~',
  isLeader: false,
};

const GatheringIntroduce = ({ imageUrl }: GatheringIntroduceProps) => {
  const { title, description, gatheringGuide } = GATHERING_INTRO_DUMMY_DATA;

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
        {imageUrl && (
          <img
            src={imageUrl || DEFAULT_IMAGE_URL}
            alt='모임 이미지'
            className='h-[350px] w-full object-cover'
          />
        )}
        <GatheringDescription title={title} description={description} />
        <div className='p-5'>
          <GatheringGuide gatheringGuide={gatheringGuide} />
        </div>
      </div>
    </div>
  );
};

export default GatheringIntroduce;
