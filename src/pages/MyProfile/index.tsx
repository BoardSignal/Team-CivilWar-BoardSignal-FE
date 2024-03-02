import { Link, useParams } from 'react-router-dom';

import { useGetUserProfilesApi } from '@/apis/userProfile';
import type { UserProfileResponse } from '@/apis/userProfile';
import Button from '@/components/Button';
import { GNB } from '@/components/GNB';
import Icon from '@/components/Icon';
import TabBar from '@/components/TabBar';

import MannerReview from './components/MannerReview';
import PersonalInfo from './components/PersonalInfo';
import PreferCategory from './components/PreferCategory';
import SignalTemperature from './components/SignalTemperature';

const WishGameList = ({ wishGamesCount }: { wishGamesCount: number }) => {
  const { userId } = useParams();

  return (
    <Link to={`/wish-game/${userId}`}>
      <Button className='flex h-auto gap-4 border-b border-gray-accent7 p-4'>
        <div className='flex w-full justify-between'>
          <span className='flex gap-1'>
            <span className='font-bold text-gray-accent1'>찜한 게임 목록</span>
            <span className='text-black'>{wishGamesCount}</span>
          </span>
          <Icon id='arrow-right-line' className='cursor-pointer'></Icon>
        </div>
      </Button>{' '}
    </Link>
  );
};

const EndedGatheringList = ({ endedGame }: { endedGame: number }) => {
  return (
    <Link to='/end-games'>
      <Button className='flex h-auto gap-4 border-b border-gray-accent7 p-4'>
        <div className='flex w-full justify-between'>
          <span className='flex gap-1'>
            <span className='font-bold text-gray-accent1'>
              종료된 게임 목록
            </span>
            <span className='text-black'>{endedGame}</span>
          </span>
          <Icon id='arrow-right-line' className='cursor-pointer'></Icon>
        </div>
      </Button>
    </Link>
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
  const { userId } = useParams() as { userId: string };
  const { data, isPending, isError } = useGetUserProfilesApi(userId);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const {
    ageGroup,
    gender,
    isProfileManager,
    mannerScore,
    preferCategories,
    profileImageUrl,
    reviews,
    signal,
    wishCount,
    nickname,
  } = data as UserProfileResponse;

  const personalInfo = {
    ageGroup,
    nickname,
    signalCount: signal,
    gender,
    profileImageUrl,
  };

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
        {isProfileManager && <EditProfileButton />}
        <div className='flex flex-col gap-2 border-b border-gray-accent7 p-4'>
          <SignalTemperature value={mannerScore} />
          <MannerReview reviews={reviews} />
        </div>
        <PreferCategory categories={preferCategories} />
        <WishGameList wishGamesCount={wishCount} />
        <EndedGatheringList endedGame={signal} />
      </div>
      {isProfileManager && <GNB />}
    </div>
  );
};

export default MyProfilePage;
