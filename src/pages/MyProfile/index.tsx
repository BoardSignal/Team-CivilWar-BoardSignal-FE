import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import TabBar from '@/components/TabBar';

import MannerReview from './components/MannerReview';
import PersonalInfo from './components/PersonalInfo';
import PreferCategory from './components/PreferCategory';
import SignalTemperature from './components/SignalTemperature';

const ProfilePageDummyDate = {
  personalInfo: {
    nickname: '네이밍 못짓는 호민',
    signal: 15,
    profileImageUrl: '',
    ageGroup: '20대',
    gender: '남성',
  },
  signalTemperature: 86.3,
  reviews: [
    {
      title: '시간을 잘 지켜요.',
      count: 12,
    },
    {
      title: '착해요.',
      count: 9,
    },
    {
      title: '게임을 재밌게 해요.',
      count: 4,
    },
  ],
  categories: ['배팅/전략', '카드경매', '심리', '블러핑', '마피아', '카드빙고'],
};

const WishGameList = ({ wish }: { wish: number }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/wish-game')}
      className='flex gap-4 border-b border-gray-accent7 p-4'
    >
      <div className='flex w-full justify-between'>
        <span className='flex gap-1'>
          <span className='font-bold text-gray-accent1'>찜한 게임 목록</span>
          <span>{wish}</span>
        </span>
        <Icon id='arrow-right-line' className='cursor-pointer'></Icon>
      </div>
    </Button>
  );
};

const EditProfileButton = () => {
  const navigate = useNavigate();

  return (
    <div className='p-4'>
      <Button
        className='rounded-lg bg-primary text-white'
        onClick={() => navigate('/edit-profile')}
      >
        프로필 수정
      </Button>
    </div>
  );
};

const MyProfilePage = () => {
  const { reviews, signalTemperature, personalInfo, categories } =
    ProfilePageDummyDate;

  return (
    <>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
        <TabBar.Right>
          <TabBar.ShareButton />
          <TabBar.LogoutButton />
          <TabBar.SettingsButton />
        </TabBar.Right>
      </TabBar.Container>
      <PersonalInfo personalInfo={personalInfo} />
      <EditProfileButton />
      <div className='flex flex-col gap-2 border-b border-gray-accent7 p-4'>
        <SignalTemperature value={signalTemperature} />
        <MannerReview reviews={reviews} />
      </div>
      <PreferCategory categories={categories} />
      <WishGameList wish={3} />
    </>
  );
};

export default MyProfilePage;
