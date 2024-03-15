import { useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import GatheringListItem from '@/components/GatheringListItem';
import TabBar from '@/components/TabBar';
import useChatting from '@/hooks/useChatting';

import ChatContainer from './components/ChatContainer';
import ChatInput from './components/ChatInput';

const ChatRoomPage = () => {
  const { gatheringId } = useParams();
  const { sendMessage } = useChatting(parseInt(gatheringId as string));
  const { gatheringListItem } = useGetGatheringDetailApi(gatheringId as string);

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      <GatheringListItem gathering={gatheringListItem} />
      <ChatContainer gatheringId={parseInt(gatheringId as string)} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatRoomPage;
