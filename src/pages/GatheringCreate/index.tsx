import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { SUCCESS_GATHERING_CREATE_MODAL_MESSAGE } from '@/constants/messages/modal';

import GatheringCreateForm from './components/GatheringCreateForm';

const GatheringCreatePage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdGatheringId, setCreatedGatheringId] = useState<
    number | undefined
  >(undefined);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/gatherings/${createdGatheringId}`);
  };

  const handleCreateGathering = (gatheringId: number) => {
    handleOpenModal();
    setCreatedGatheringId(gatheringId);
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
        {SUCCESS_GATHERING_CREATE_MODAL_MESSAGE}
      </Modal>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      <GatheringCreateForm onCreate={handleCreateGathering} />
    </div>
  );
};

export default GatheringCreatePage;
