import { useState } from 'react';

import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { SUCCESS_FIX_GATHERING_MODAL_MESSAGE } from '@/constants/messages/modal';

import GatheringFixForm from './GatheringFixForm';

const GatheringFixPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
