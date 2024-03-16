import { GNB } from '@/components/GNB';
import TabBar from '@/components/TabBar';

import ChatRoomList from './components/ChatRoomList';

const ChatRoomListPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.Title>채팅</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <ChatRoomList />
      <GNB />
    </div>
  );
};

export default ChatRoomListPage;
