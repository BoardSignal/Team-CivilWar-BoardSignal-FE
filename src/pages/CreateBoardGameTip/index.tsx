import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { BOARD_GAMES_PAGE_URL } from '@/constants/pageRoutes';

import BoardGameCreateTipForm from './components/CreateBoardGameTipForm';

const CreateBoardGameTipPage = () => {
  const navigate = useNavigate();

  const { boardGameId, boardGameTitle } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!boardGameId || !boardGameTitle) throw new Error();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`${BOARD_GAMES_PAGE_URL}/${boardGameId}`);
  };

  const handleCreateBoardGameTip = () => {
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
        공략이 작성됐어요.
      </Modal>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>{boardGameTitle}</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <BoardGameCreateTipForm
        onCreate={handleCreateBoardGameTip}
        boardGameId={boardGameId}
      />
    </div>
  );
};

export default CreateBoardGameTipPage;
