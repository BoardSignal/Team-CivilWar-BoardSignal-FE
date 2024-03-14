import { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import {
  DELETE_TIP_MODAL_MESSAGE,
  SUCCESS_GATHERING_JOIN_MODAL_MESSAGE,
} from '@/constants/messages/modal';
import {
  GATHERINGS_FIX_PAGE_URL,
  GATHERINGS_UNFIX_PAGE_URL,
} from '@/constants/pageRoutes';

interface GatheringButtonProps {
  isParticipation: boolean;
  isLeader: boolean;
  isFix: '확정' | '미확정';
}

const NotParticipationButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    //api 호출코드 필요
  };

  return (
    <>
      <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_GATHERING_JOIN_MODAL_MESSAGE}
      </Modal>
      <Button variant='primary' onClick={handleOpenModal}>
        {'입장하기'}
      </Button>
    </>
  );
};

const FixedGatheringButton = ({ boardGameId }: { boardGameId: string }) => {
  return (
    <Link to={`${GATHERINGS_UNFIX_PAGE_URL}/${boardGameId}`}>
      <Button variant='danger'>모임 확정 취소하기</Button>
    </Link>
  );
};

const UnFixedIsLeaderGatheringButton = ({
  boardGameId,
}: {
  boardGameId: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    //api 호출코드 필요
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isModalOpen}
        onClose={handleDeleteModal}
        onDelete={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {DELETE_TIP_MODAL_MESSAGE}
      </Modal>
      <Link to={`${GATHERINGS_FIX_PAGE_URL}/${boardGameId}`}>
        <Button variant='primary'>모임 확정하기</Button>
      </Link>
      <Button variant='danger' onClick={handleOpenModal}>
        모임 삭제하기
      </Button>
    </>
  );
};

const UnFixedIsParticipantGatheringButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    //api 호출코드 필요
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isModalOpen}
        onClose={handleDeleteModal}
        onDelete={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {DELETE_TIP_MODAL_MESSAGE}
      </Modal>
      <Button variant='danger' onClick={handleOpenModal}>
        모임 나가기
      </Button>
    </>
  );
};

const GatheringButton = ({
  isParticipation,
  isLeader,
  isFix,
}: GatheringButtonProps) => {
  const { boardGameId } = useParams() as { boardGameId: string };

  return (
    <div className='flex flex-col gap-4 p-4'>
      {!isParticipation ? (
        <NotParticipationButton />
      ) : isFix === '확정' ? (
        <FixedGatheringButton boardGameId={boardGameId} />
      ) : isLeader ? (
        <UnFixedIsLeaderGatheringButton boardGameId={boardGameId} />
      ) : (
        <UnFixedIsParticipantGatheringButton />
      )}
    </div>
  );
};

export default GatheringButton;
