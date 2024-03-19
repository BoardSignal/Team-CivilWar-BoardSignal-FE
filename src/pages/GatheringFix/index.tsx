import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { SUCCESS_FIX_GATHERING_MODAL_MESSAGE } from '@/constants/messages/modal';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';

import useBlockNonParticipant from '../GatheringUnfix/hooks/useBlockNonParticipant';
import GatheringFixForm from './GatheringFixForm';

const GatheringFixPage = () => {
  const { gatheringId } = useParams() as { gatheringId: string };
  useBlockNonParticipant(gatheringId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`${GATHERINGS_PAGE_URL}/${gatheringId}`);
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
        {SUCCESS_FIX_GATHERING_MODAL_MESSAGE}
      </Modal>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <span>모임</span>
        </TabBar.Left>
      </TabBar.Container>
      <GatheringFixForm onCreate={handleOpenModal} />
    </div>
  );
};

export default GatheringFixPage;
