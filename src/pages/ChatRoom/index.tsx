import { useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import GatheringListItem from '@/components/GatheringListItem';
import TabBar from '@/components/TabBar';
import useSendChatMessage from '@/hooks/useSendChatMessage';

import ChatContainer from './components/ChatContainer';
import ChatTextarea from './components/ChatTextarea';

const ChatRoomPage = () => {
  const { gatheringId: rawGatheringId } = useParams() as {
    gatheringId: string;
  };
  const gatheringId = parseInt(rawGatheringId, 10);

  const { sendMessage } = useSendChatMessage(gatheringId, true);
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
      <ChatTextarea onSend={sendMessage} />
    </div>
  );
};

export default ChatRoomPage;
