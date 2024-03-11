import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/getGatheringDetail';
import { useGetLoggedInUserApi } from '@/apis/getLoggedInUser';
import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import Alert from '@/components/alert';
import { UNFIX_GATHERING_ALERT_MESSAGE } from '@/constants/messages/alert';
import { SUCCESS_UNFIX_GATHERING_MODAL_MESSAGE } from '@/constants/messages/modal';

import GatheringUnfixForm from './components/GatheringUnfixForm';

const GatheringUnfixPage = () => {
  const { gatheringId } = useParams();

  if (!gatheringId) {
    throw new Error('gathering id is required');
  }

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id: currentUserId } = useGetLoggedInUserApi();
  const { isFix, participantResponse: participants } =
    useGetGatheringDetailApi(gatheringId);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/gatherings/${gatheringId}`);
  };

  useEffect(() => {
    const isParticipant = participants.some(
      ({ userId }) => currentUserId === userId,
    );

    if (isFix === '미확정' || !isParticipant) {
      throw new Error('Inaccessible page');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserId, participants]);

  return (
    <div className='flex h-full flex-col'>
      <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_UNFIX_GATHERING_MODAL_MESSAGE}
      </Modal>

      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>모임</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <div className='px-4'>
        <Alert variant='danger'>{UNFIX_GATHERING_ALERT_MESSAGE}</Alert>
      </div>
      <GatheringUnfixForm gatheringId={gatheringId} onUnfix={handleOpenModal} />
    </div>
  );
};

export default GatheringUnfixPage;
