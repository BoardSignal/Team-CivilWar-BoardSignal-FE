import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import { useGetIsJoinedUserApi } from '@/apis/loggedInUser';
import SpinnerFullScreen from '@/components/Spinner/SpinnerFullScreen';
import TabBar from '@/components/TabBar';
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';

import GatheringButton from './components/GatheringButton';
import GatheringIntroduce from './components/GatheringIntroduce';
import GatheringParticipants from './components/GatheringParticipants';
import TabMenu from './components/TabMenu';

const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);

const GatheringDetailPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { gatheringId } = useParams() as { gatheringId: string };
  const gatheringDetail = useGetGatheringDetailApi(gatheringId);
  const {
    gathering: { participantResponse, isLeader, isFix, ...gatheringIntroduce },
  } = gatheringDetail;

  const { data, isLoading } = useGetIsJoinedUserApi(accessToken);

  if (isLoading) {
    return <SpinnerFullScreen />;
  }

  const handleTabSelect = (index: number) => {
    setActiveTab(index);
  };

  const isParticipation = data
    ? participantResponse.some(({ userId }) => userId === data.id)
    : false;

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
        <GatheringParticipants
          participants={participantResponse}
          isLeader={isLeader}
        />
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
