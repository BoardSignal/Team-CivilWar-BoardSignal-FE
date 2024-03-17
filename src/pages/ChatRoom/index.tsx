import { useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import GatheringListItem from '@/components/GatheringListItem';
import TabBar from '@/components/TabBar';
import useChatting from '@/hooks/useChatting';

import ChatContainer from './components/ChatContainer';
import ChatInput from './components/ChatInput';

const ChatRoomPage = () => {
  const { gatheringId: rawGatheringId } = useParams() as {
    gatheringId: string;
  };
  const gatheringId = parseInt(rawGatheringId, 10);

  const { sendMessage } = useChatting(gatheringId);
  const { gatheringListItem } = useGetGatheringDetailApi(
    gatheringId.toString(),
  );

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      <GatheringListItem gathering={gatheringListItem} />
      <ChatContainer gatheringId={gatheringId} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatRoomPage;
