import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import { useGetIsJoinedUserApi } from '@/apis/loggedInUser';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import SpinnerFullScreen from '@/components/Spinner/SpinnerFullScreen';
import TabBar from '@/components/TabBar';
import { CHATS_PAGE_URL } from '@/constants/pageRoutes';
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';

import GatheringButton from './components/GatheringButton';
import GatheringIntroduce from './components/GatheringIntroduce';
import GatheringParticipants from './components/GatheringParticipants';
import TabMenu from './components/TabMenu';

const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);

const GatheringDetailPage = () => {
  const navigate = useNavigate();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const { gatheringId, tabIndex } = useParams() as {
    gatheringId: string;
    tabIndex: string;
  };
  const gatheringDetail = useGetGatheringDetailApi(gatheringId);
  const {
    gathering: { participantResponse, isLeader, isFix, ...gatheringIntroduce },
  } = gatheringDetail;

  const { data, isLoading } = useGetIsJoinedUserApi(accessToken);

  if (isLoading) {
    return <SpinnerFullScreen />;
  }

  const isParticipation = data
    ? participantResponse.some(({ userId }) => userId === data.id)
    : false;

  const goToGatheringListPage = () => {
    navigate('/');
  };

  const handleClickKakaoSharingButton = () => {
    const {
      gathering: { imageUrl, title, description },
    } = gatheringDetail;
    const path = window.location.pathname.slice(1);

    window.Kakao.Share.sendCustom({
      templateId: 107258,
      templateArgs: {
        thumbnail_image: imageUrl,
        title,
        description,
        path,
      },
    });
  };

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton onClick={goToGatheringListPage} />
        </TabBar.Left>
        <TabBar.Right>
          {isParticipation && (
            <TabBar.ChatButton
              onClick={() => navigate(`${CHATS_PAGE_URL}/${gatheringId}`)}
            />
          )}
          <TabBar.ShareButton onClick={() => setIsShareModalOpen(true)} />
          <Modal
            variant='primary'
            isOpen={isShareModalOpen}
            onClose={() => setIsShareModalOpen(false)}
            title='공유'
            buttonChildren='닫기'
          >
            <Button
              onClick={handleClickKakaoSharingButton}
              className='h-fit w-fit'
            >
              <img
                src='https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png'
                alt='카카오톡 공유하기 버튼'
                className='size-12'
              />
            </Button>
          </Modal>
        </TabBar.Right>
      </TabBar.Container>
      <TabMenu tabs={['모임 소개', `참가자 (${participantResponse.length})`]} />
      {tabIndex === '1' ? (
        <GatheringParticipants
          participants={participantResponse}
          isLeader={isLeader}
        />
      ) : (
        <GatheringIntroduce
          gatheringIntroduce={gatheringIntroduce}
          gatheringLeaderInfo={participantResponse[0]}
        />
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
