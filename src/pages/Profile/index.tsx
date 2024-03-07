import { Link, useNavigate, useParams } from 'react-router-dom';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import TabBar from '@/components/TabBar';

import MannerReview from './components/MannerReview';
import PersonalInfo from './components/PersonalInfo';
import PreferCategory from './components/PreferCategory';
import SignalTemperature from './components/SignalTemperature';

const PROFILE_PAGE_DUMMY_DATA = {
  personalInfo: {
    nickname: '네이밍 못짓는 호민',
    signalCount: 15,
    profileImageUrl: '',
    ageGroup: '20대',
    gender: '남성',
  },
  signalTemperature: 86.3,
  reviews: [
    {
      content: '시간 약속을 잘 지켜요.',
      reviewScore: 12,
    },
    {
      content: '친절하고 매너가 좋아요.',
      reviewScore: 9,
    },
    {
      content: '응답이 빨라요.',
      reviewScore: 4,
    },
  ],
  categories: ['배팅/전략', '카드경매', '심리', '블러핑', '마피아', '카드빙고'],
  wishCount: 3,
};

const WishGameList = ({ wishGamesCount }: { wishGamesCount: number }) => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const goToWishGamePage = () => {
    navigate(`/wish-game/${userId}`);
  };

  return (
    <Button
      onClick={goToWishGamePage}
      className='flex h-auto gap-4 border-b border-gray-accent7 p-4'
    >
      <div className='flex w-full justify-between'>
        <span className='flex gap-1'>
          <span className='font-bold text-gray-accent1'>찜한 게임 목록</span>
          <span>{wishGamesCount}</span>
        </span>
        <Icon id='arrow-right-line' className='cursor-pointer'></Icon>
      </div>
    </Button>
  );
};

const EditProfileButton = () => {
  return (
    <div className='border-b border-gray-accent7 p-4'>
      <Link to='/edit-profile'>
        <Button className='rounded-lg bg-primary text-white'>
          프로필 수정
        </Button>
      </Link>
    </div>
  );
};

const MyProfilePage = () => {
  const { reviews, signalTemperature, personalInfo, categories, wishCount } =
    PROFILE_PAGE_DUMMY_DATA;

  return (
    <div className='flex h-full flex-col'>
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
      <div className='grow overflow-y-auto'>
        <PersonalInfo personalInfo={personalInfo} />
        <EditProfileButton />
        <div className='flex flex-col gap-2 border-b border-gray-accent7 p-4'>
          <SignalTemperature value={signalTemperature} />
          <MannerReview reviews={reviews} />
        </div>
        <PreferCategory categories={categories} />
        <WishGameList wishGamesCount={wishCount} />
      </div>
    </div>
  );
};

export default MyProfilePage;
