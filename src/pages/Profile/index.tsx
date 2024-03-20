import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useGetLoggedInUserApi } from '@/apis/loggedInUser';
import { useGetUserProfilesApi } from '@/apis/userProfile';
import { GNB } from '@/components/GNB';
import Modal from '@/components/Modal';
import Select from '@/components/Select';
import TabBar from '@/components/TabBar';
import { activateColorTheme, useDarkMode } from '@/utils/activateColorTheme';

import EditProfileButton from './components/EditProfileButton';
import EndedGatheringButton from './components/EndedGatheringButton';
import MannerReview from './components/MannerReview';
import PersonalInfo from './components/PersonalInfo';
import PreferCategory from './components/PreferCategory';
import SignalTemperature from './components/SignalTemperature';
import WishGameButton from './components/WishGameButton';
import { useLogout } from './hooks/useLogout';

const themeStorage = localStorage.getItem('theme');
const themeOptions =
  themeStorage === 'dark'
    ? ['다크모드', '라이트모드']
    : ['라이트모드', '다크모드'];

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useGetLoggedInUserApi();
  const { userId: pathUserId } = useParams() as { userId: string };
  const userId = pathUserId === 'me' ? String(id) : pathUserId;
  const { logoutApi } = useLogout();
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();

  const {
    isProfileManager,
    signalTemperature,
    preferCategories,
    reviews,
    wishCount,
    ...personalInfo
  } = useGetUserProfilesApi(userId);

  useEffect(() => {
    activateColorTheme();
  }, [isDarkMode]);

  const handleCloseThemeModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenThemeModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleCloseThemeModal}
        title='테마'
        buttonChildren='확인'
      >
        <Select
          options={themeOptions}
          placeholder='시스템테마'
          onChange={handleDarkModeToggle}
        />
      </Modal>
      <div className='flex h-full flex-col'>
        <TabBar.Container>
          <TabBar.Left>
            <TabBar.GoBackButton />
          </TabBar.Left>
          <TabBar.Right>
            <TabBar.ShareButton />
            <TabBar.LogoutButton onClick={logoutApi} />
            <TabBar.SettingsButton onClick={handleOpenThemeModal} />
          </TabBar.Right>
        </TabBar.Container>
        <div className='grow overflow-y-auto overflow-x-hidden'>
          <PersonalInfo personalInfo={personalInfo} />
          {isProfileManager && <EditProfileButton userId={userId} />}
          <div className='flex flex-col gap-2 border-b border-gray-accent7 p-4'>
            <SignalTemperature value={signalTemperature} />
            <MannerReview reviews={reviews} />
          </div>
          <PreferCategory categories={preferCategories} />
          <WishGameButton wishGamesCount={wishCount} userId={userId} />
          <EndedGatheringButton endedGame={personalInfo.signal} />
        </div>
        {isProfileManager && <GNB />}
      </div>
    </>
  );
};

export default ProfilePage;
