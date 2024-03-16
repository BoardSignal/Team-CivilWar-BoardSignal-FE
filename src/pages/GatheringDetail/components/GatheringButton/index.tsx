import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import {
  DELETE_GATHERING_MODAL_MESSAGE,
  OUT_GATHERING_MODAL_MESSAGE,
  SUCCESS_DELETE_GATHERING_MODAL_MESSAGE,
  SUCCESS_GATHERING_JOIN_MODAL_MESSAGE,
  SUCCESS_OUT_GATHERING_MODAL_MESSAGE,
} from '@/constants/messages/modal';
import {
  GATHERINGS_FIX_PAGE_URL,
  GATHERINGS_UNFIX_PAGE_URL,
} from '@/constants/pageRoutes';
import { GATHERING_DETAIL_QUERY_KEY } from '@/constants/queryKey';

import { useGathering } from '../../hooks/useGatheringDelete';
import { useGatheringEntrance } from '../../hooks/useGatheringEntrance';
import { useGatheringNonparticipants } from '../../hooks/useGatheringNonparticipants';

interface GatheringButtonProps {
  isParticipation: boolean;
  isLeader: boolean;
  isFix: '확정' | '미확정';
}

interface GatheringIdProps {
  gatheringId: string;
}

const NotParticipationButton = ({ gatheringId }: GatheringIdProps) => {
  const [isEntranceModalOpen, setIsEntranceModalOpen] = useState(false);
  const gatheringEntrance = useGatheringEntrance();
  const queryClient = useQueryClient();

  const handleOpenEntranceModal = () => {
    setIsEntranceModalOpen(true);
  };

  const handleCloseEntranceModal = () => {
    setIsEntranceModalOpen(false);
    queryClient.invalidateQueries({
      queryKey: [GATHERING_DETAIL_QUERY_KEY, gatheringId],
    });
  };

  const handleGatheringEntrance = () => {
    gatheringEntrance(gatheringId, handleOpenEntranceModal);
  };

  return (
    <>
      <Modal
        variant='primary'
        isOpen={isEntranceModalOpen}
        onClose={handleCloseEntranceModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_GATHERING_JOIN_MODAL_MESSAGE}
      </Modal>
      <Button variant='primary' onClick={handleGatheringEntrance}>
        입장하기
      </Button>
    </>
  );
};

const FixedGatheringButton = ({ gatheringId }: GatheringIdProps) => {
  return (
    <Link to={`${GATHERINGS_UNFIX_PAGE_URL}/${gatheringId}`}>
      <Button variant='danger'>모임 확정 취소하기</Button>
    </Link>
  );
};

const UnFixedIsLeaderGatheringButton = ({ gatheringId }: GatheringIdProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const gatheringDelete = useGathering();
  const navigate = useNavigate();

  const handleOpenDeleteConfirmModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteConfirmModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCloseIsSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate('/');
  };

  const handleOpenIsSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const handleDeleteGathering = () => {
    setIsDeleteModalOpen(false);
    gatheringDelete(gatheringId, handleOpenIsSuccessModal);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteConfirmModal}
        onDelete={handleDeleteGathering}
        title='안내'
        buttonChildren='확인'
      >
        {DELETE_GATHERING_MODAL_MESSAGE}
      </Modal>
      <Modal
        variant='primary'
        isOpen={isSuccessModalOpen}
        onClose={handleCloseIsSuccessModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_DELETE_GATHERING_MODAL_MESSAGE}
      </Modal>
      <Link to={`${GATHERINGS_FIX_PAGE_URL}/${gatheringId}`}>
        <Button variant='primary'>모임 확정하기</Button>
      </Link>
      <Button variant='danger' onClick={handleOpenDeleteConfirmModal}>
        모임 삭제하기
      </Button>
    </>
  );
};

const UnFixedIsParticipantGatheringButton = ({
  gatheringId,
}: GatheringIdProps) => {
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const gatheringNonparticipants = useGatheringNonparticipants();
  const queryClient = useQueryClient();

  const handleOpenLeaveConfirmModal = () => {
    setIsLeaveModalOpen(true);
  };

  const handleCloseLeaveConfirmModal = () => {
    setIsLeaveModalOpen(false);
  };

  const handleCloseIsSuccessModal = () => {
    setIsSuccessModalOpen(false);
    queryClient.invalidateQueries({
      queryKey: [GATHERING_DETAIL_QUERY_KEY, gatheringId],
    });
  };

  const handleOpenIsSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const handleLeaveGatheringModal = () => {
    setIsLeaveModalOpen(false);
    gatheringNonparticipants(gatheringId, handleOpenIsSuccessModal);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isLeaveModalOpen}
        onClose={handleCloseLeaveConfirmModal}
        onDelete={handleLeaveGatheringModal}
        title='안내'
        buttonChildren='확인'
      >
        {OUT_GATHERING_MODAL_MESSAGE}
      </Modal>
      <Modal
        variant='primary'
        isOpen={isSuccessModalOpen}
        onClose={handleCloseIsSuccessModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_OUT_GATHERING_MODAL_MESSAGE}
      </Modal>
      <Button variant='danger' onClick={handleOpenLeaveConfirmModal}>
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
  const { gatheringId } = useParams() as { gatheringId: string };

  return (
    <div className='flex flex-col gap-4 p-4'>
      {!isParticipation ? (
        <NotParticipationButton gatheringId={gatheringId} />
      ) : isFix === '확정' ? (
        <FixedGatheringButton gatheringId={gatheringId} />
      ) : isLeader ? (
        <UnFixedIsLeaderGatheringButton gatheringId={gatheringId} />
      ) : (
        <UnFixedIsParticipantGatheringButton gatheringId={gatheringId} />
      )}
    </div>
  );
};

export default GatheringButton;
