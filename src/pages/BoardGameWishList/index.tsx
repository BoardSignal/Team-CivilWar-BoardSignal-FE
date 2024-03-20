import { useGetLoggedInUserApi } from '@/apis/loggedInUser';
import defaultProfileImage from '@/assets/default-profile-image.png';
import TabBar from '@/components/TabBar';

import BoardGameWishList from './components/BoardGameWishList';

const BoardGameWishListPage = () => {
  const { profileImageUrl } = useGetLoggedInUserApi();

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>
            <div className='flex gap-1'>
              <span>찜한 게임 목록</span>
              <img
                src={profileImageUrl ?? defaultProfileImage}
                alt='프로필'
                className='size-6 rounded-full'
              />
            </div>
          </TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <BoardGameWishList />
    </div>
  );
};

export default BoardGameWishListPage;
