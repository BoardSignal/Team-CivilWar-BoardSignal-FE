import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import Alert from '@/components/Alert';
import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { UNFIX_GATHERING_ALERT_MESSAGE } from '@/constants/messages/alert';
import { SUCCESS_UNFIX_GATHERING_MODAL_MESSAGE } from '@/constants/messages/modal';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';

import GatheringUnfixForm from './components/GatheringUnfixForm';
import useBlockIfNotFixed from './hooks/useBlockIfNotFixed';
import useBlockNonParticipant from './hooks/useBlockNonParticipant';

const GatheringUnfixPage = () => {
  const { gatheringId } = useParams() as {
    gatheringId: string;
  };

  useBlockNonParticipant(gatheringId);
  useBlockIfNotFixed(gatheringId);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`${GATHERINGS_PAGE_URL}/${gatheringId}/0`, { replace: true });
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
