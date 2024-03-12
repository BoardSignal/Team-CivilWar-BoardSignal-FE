import { useParams } from 'react-router-dom';

import { useGetUserProfilesApi } from '@/apis/userProfile';
import { GNB } from '@/components/GNB';
import TabBar from '@/components/TabBar';

import EditProfileButton from './components/EditProfileButton';
import EndedGatheringButton from './components/EndedGatheringButton';
import MannerReview from './components/MannerReview';
import PersonalInfo from './components/PersonalInfo';
import PreferCategory from './components/PreferCategory';
import SignalTemperature from './components/SignalTemperature';
import WishGameButton from './components/WishGameButton';
import { useLogout } from './hooks/useLogout';

const MyProfilePage = () => {
  const { userId } = useParams();
  if (!userId) {
    throw new Error('invalid userId');
  }

  const { data, isPending, isError } = useGetUserProfilesApi(userId);
  const { logoutApi } = useLogout();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const {
    isProfileManager,
    mannerScore,
    preferCategories,
    reviews,
    wishCount,
    ...personalInfo
  } = data;

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
        <TabBar.Right>
          <TabBar.ShareButton />
          <TabBar.LogoutButton onClick={logoutApi} />
          <TabBar.SettingsButton />
        </TabBar.Right>
      </TabBar.Container>
      <div className='grow overflow-y-auto'>
        <PersonalInfo personalInfo={personalInfo} />
        {isProfileManager && <EditProfileButton userId={userId} />}
        <div className='flex flex-col gap-2 border-b border-gray-accent7 p-4'>
          <SignalTemperature value={mannerScore} />
          <MannerReview reviews={reviews} />
        </div>
        <PreferCategory categories={preferCategories} />
        <WishGameButton wishGamesCount={wishCount} userId={userId} />
        <EndedGatheringButton endedGame={personalInfo.signal} />
      </div>
      {isProfileManager && <GNB />}
    </div>
  );
};

export default MyProfilePage;
