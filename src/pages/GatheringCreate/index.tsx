import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';

import GatheringCreateForm from './components/GatheringCreateForm';

// TODO: 나이대 includedValue 사용자 연령으로 변경
const GatheringCreatePage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gatheringId, setGatheringId] = useState<number | undefined>(undefined);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/gatherings/${gatheringId}`);
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
        모임 생성을 완료했어요.
      </Modal>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      <GatheringCreateForm
        onOpenModal={handleOpenModal}
        onChangeGatheringId={setGatheringId}
      />
    </div>
  );
};

export default GatheringCreatePage;
