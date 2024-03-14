import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import { useGetLoggedInUserApi } from '@/apis/getLoggedInUser';
import TabBar from '@/components/TabBar';

import GatheringButton from './components/GatheringButton';
import GatheringIntroduce from './components/GatheringIntroduce';
import GatheringParticipants from './components/GatheringParticipants';
import TabMenu from './components/TabMenu';

const GatheringDetailPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { gatheringId } = useParams() as { gatheringId: string };
  const gatheringDetail = useGetGatheringDetailApi(gatheringId);
  const { participantResponse, isLeader, isFix, ...gatheringIntroduce } =
    gatheringDetail;
  const { id } = useGetLoggedInUserApi();

  const handleTabSelect = (index: number) => {
    setActiveTab(index);
  };

  const isParticipation = participantResponse.some(
    ({ userId }) => userId === id,
  );

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
        <TabBar.Right>
          <TabBar.ShareButton />
        </TabBar.Right>
      </TabBar.Container>
      <TabMenu
        tabs={['모임 소개', `참가자 (${participantResponse.length})`]}
        onSelectTab={handleTabSelect}
      />
      {activeTab ? (
        <GatheringParticipants participants={participantResponse} />
      ) : (
        <GatheringIntroduce gatheringIntroduce={gatheringIntroduce} />
      )}
      <GatheringButton
        isLeader={isLeader}
        isParticipation={isParticipation}
        isFix={isFix}
      />
    </div>
  );
};

export default GatheringDetailPage;
