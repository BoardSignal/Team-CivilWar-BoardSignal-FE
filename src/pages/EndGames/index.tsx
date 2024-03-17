import { useGetLoggedInUserApi } from '@/apis/loggedInUser';
import TabBar from '@/components/TabBar';

import EndGameList from './components/EndGameList';

const EndGamesPage = () => {
  const { nickname, id } = useGetLoggedInUserApi();

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>{nickname}</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <EndGameList userId={id} />
    </div>
  );
};

export default EndGamesPage;
