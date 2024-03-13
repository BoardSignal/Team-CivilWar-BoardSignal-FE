import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import Alert from '@/components/alert';
import { UNFIX_GATHERING_ALERT_MESSAGE } from '@/constants/messages/alert';
import { SUCCESS_UNFIX_GATHERING_MODAL_MESSAGE } from '@/constants/messages/modal';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import useGetLoggedInUserId from '@/hooks/useGetLoggedInUserId';

import GatheringUnfixForm from './components/GatheringUnfixForm';

const GatheringUnfixPage = () => {
  const { gatheringId } = useParams();

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentUserId = useGetLoggedInUserId();
  const { isFix, participantResponse: participants } = useGetGatheringDetailApi(
    gatheringId as string,
  );

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`${GATHERINGS_PAGE_URL}/${gatheringId}`);
  };

  useEffect(() => {
    const isParticipant = participants.some(
      ({ userId }) => currentUserId === userId,
    );

    if (isFix === '미확정' || !isParticipant) {
      throw new Error('Inaccessible page');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <GatheringUnfixForm
        gatheringId={gatheringId as string}
        onUnfix={handleOpenModal}
      />
    </div>
  );
};

export default GatheringUnfixPage;