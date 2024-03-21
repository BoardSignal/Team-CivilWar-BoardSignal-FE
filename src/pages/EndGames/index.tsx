import { useGetLoggedInUserApi } from '@/apis/loggedInUser';
import defaultProfileImage from '@/assets/default-profile-image.png';
import TabBar from '@/components/TabBar';

import EndGameList from './components/EndGameList';

const EndGamesPage = () => {
  const { nickname, profileImageUrl, id } = useGetLoggedInUserApi();

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>
            <div className='flex gap-1'>
              <span>{nickname}</span>
              <img
                src={profileImageUrl ?? defaultProfileImage}
                alt='프로필'
                className='size-6 rounded-full'
              />
            </div>
          </TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <EndGameList userId={id} />
    </div>
  );
};

export default EndGamesPage;
