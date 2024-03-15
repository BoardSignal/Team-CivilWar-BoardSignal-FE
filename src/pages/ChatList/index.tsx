import { GNB } from '@/components/GNB';
import TabBar from '@/components/TabBar';

import ChatList from './components/ChatList';

const ChatListPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.Title>채팅</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <ChatList />
      <GNB />
    </div>
  );
};

export default ChatListPage;
