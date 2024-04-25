import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetEndGameDetailsApi } from '@/apis/endGameUser';
import EndGameListItem from '@/components/EndGameListItem';
import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { SUCCESS_RIVIEW_MODAL_MESSAGE } from '@/constants/messages/modal';
import { END_GAMES_PAGE_URL } from '@/constants/pageRoutes';

import ReviewForm from './components/ReviewForm';

const ReviewCreate = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { gatheringId } = useParams() as { gatheringId: string };
  const { participantsInfos, gathering } = useGetEndGameDetailsApi(gatheringId);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(END_GAMES_PAGE_URL, { replace: true });
  };

  const handleReviewCreate = () => {
    handleOpenModal();
  };

  return (
    <div className='flex h-full flex-col'>
      <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_RIVIEW_MODAL_MESSAGE}
      </Modal>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      <EndGameListItem endGame={gathering} />
      <ReviewForm
        participantsInfos={participantsInfos}
        onReviewCreate={handleReviewCreate}
        gatheringId={gatheringId}
      />
    </div>
  );
};

export default ReviewCreate;
