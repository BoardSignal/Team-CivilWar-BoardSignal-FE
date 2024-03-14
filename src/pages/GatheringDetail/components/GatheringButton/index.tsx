import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import {
  OUT_GATHERING_MODAL_MESSAGE,
  SUCCESS_GATHERING_JOIN_MODAL_MESSAGE,
  SUCCESS_OUT_GATHERING_MODAL_MESSAGE,
} from '@/constants/messages/modal';
import {
  GATHERINGS_FIX_PAGE_URL,
  GATHERINGS_UNFIX_PAGE_URL,
} from '@/constants/pageRoutes';
import { GATHERING_DETAIL_QUERY_KEY } from '@/constants/queryKey';

import { useGathering } from '../../hooks/useGatheringDelete';
import { useGatheringNonparticipants } from '../../hooks/useGatheringNonparticipants';
import { useGatheringParticipants } from '../../hooks/useGatheringParticipants';

interface GatheringButtonProps {
  isParticipation: boolean;
  isLeader: boolean;
  isFix: '확정' | '미확정';
}

const NotParticipationButton = ({ gatheringId }: { gatheringId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gatheringParticipants = useGatheringParticipants();
  const queryClient = useQueryClient();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    queryClient.invalidateQueries({
      queryKey: [GATHERING_DETAIL_QUERY_KEY, gatheringId],
    });
  };

  const handleGatheringParticipants = () => {
    gatheringParticipants(gatheringId, handleOpenModal);
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
      <Button variant='primary' onClick={handleGatheringParticipants}>
        {'입장하기'}
      </Button>
    </>
  );
};

const FixedGatheringButton = ({ gatheringId }: { gatheringId: string }) => {
  return (
    <Link to={`${GATHERINGS_UNFIX_PAGE_URL}/${gatheringId}`}>
      <Button variant='danger'>모임 확정 취소하기</Button>
    </Link>
  );
};

const UnFixedIsLeaderGatheringButton = ({
  gatheringId,
}: {
  gatheringId: string;
}) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gatheringDelete = useGathering();

  const handleOpenErrorModal = () => {
    setIsErrorModalOpen(true);
  };

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const handleClosePrimaryModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenPrimaryModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteErrorModal = () => {
    setIsErrorModalOpen(false);
    gatheringDelete(gatheringId, handleOpenPrimaryModal);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isErrorModalOpen}
        onClose={handleCloseErrorModal}
        onDelete={handleDeleteErrorModal}
        title='안내'
        buttonChildren='확인'
      >
        {OUT_GATHERING_MODAL_MESSAGE}
      </Modal>
      <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleClosePrimaryModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_OUT_GATHERING_MODAL_MESSAGE}
      </Modal>
      <Link to={`${GATHERINGS_FIX_PAGE_URL}/${gatheringId}`}>
        <Button variant='primary'>모임 확정하기</Button>
      </Link>
      <Button variant='danger' onClick={handleOpenErrorModal}>
        모임 삭제하기
      </Button>
    </>
  );
};

const UnFixedIsParticipantGatheringButton = ({
  gatheringId,
}: {
  gatheringId: string;
}) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gatheringNonparticipants = useGatheringNonparticipants();
  const queryClient = useQueryClient();

  const handleOpenErrorModal = () => {
    setIsErrorModalOpen(true);
  };

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const handleClosePrimaryModal = () => {
    setIsModalOpen(false);
    queryClient.invalidateQueries({
      queryKey: [GATHERING_DETAIL_QUERY_KEY, gatheringId],
    });
  };

  const handleOpenPrimaryModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteErrorModal = () => {
    setIsErrorModalOpen(false);
    gatheringNonparticipants(gatheringId, handleOpenPrimaryModal);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isErrorModalOpen}
        onClose={handleCloseErrorModal}
        onDelete={handleDeleteErrorModal}
        title='안내'
        buttonChildren='확인'
      >
        {OUT_GATHERING_MODAL_MESSAGE}
      </Modal>
      <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleClosePrimaryModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_OUT_GATHERING_MODAL_MESSAGE}
      </Modal>
      <Button variant='danger' onClick={handleOpenErrorModal}>
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
