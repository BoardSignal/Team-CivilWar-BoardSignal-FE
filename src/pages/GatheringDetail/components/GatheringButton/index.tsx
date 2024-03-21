import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import { useGetIsJoinedUserApi } from '@/apis/loggedInUser';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import SpinnerFullScreen from '@/components/Spinner/SpinnerFullScreen';
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
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';

import { useGathering } from '../../hooks/useGatheringDelete';
import { useGatheringEntrance } from '../../hooks/useGatheringEntrance';
import { useGatheringLeave } from '../../hooks/useGatheringLeave';

interface GatheringButtonProps {
  isParticipation: boolean;
  isLeader: boolean;
  isFix: '확정' | '미확정';
}

interface GatheringIdProps {
  gatheringId: string;
}

interface EntranceGatheringButtonProps extends GatheringIdProps {
  isFix: '확정' | '미확정';
}

const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);

const EntranceGatheringButton = ({
  gatheringId,
  isFix,
}: EntranceGatheringButtonProps) => {
  const [isEntranceModalOpen, setIsEntranceModalOpen] = useState(false);
  const gatheringEntrance = useGatheringEntrance(gatheringId);
  const queryClient = useQueryClient();
  const { gathering } = useGetGatheringDetailApi(gatheringId);
  const { data, isLoading } = useGetIsJoinedUserApi(accessToken);
  const { minAge, maxAge, allowedGender } = gathering;

  if (isLoading) {
    return <SpinnerFullScreen />;
  }

  // data가 undefined인경우가 캐치 되지않아 조건문을 포함했습니다.
  const age = data ? data.age : null;
  const gender = data ? data.gender : null;
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
    gatheringEntrance(handleOpenEntranceModal);
  };

  const isInaccessibleAge = age ? age < minAge && age > maxAge : true;
  const isUnAllowedGender =
    allowedGender !== '혼성' && allowedGender !== gender;
  const isEntrance = isInaccessibleAge || isUnAllowedGender || isFix === '확정';

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
      <Button
        variant={isEntrance ? 'inactive' : 'primary'}
        onClick={handleGatheringEntrance}
      >
        입장하기
      </Button>
    </>
  );
};

const DeleteGatheringButton = ({ gatheringId }: GatheringIdProps) => {
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] =
    useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const gatheringDelete = useGathering();
  const navigate = useNavigate();

  const handleOpenDeleteConfirmModal = () => {
    setIsDeleteConfirmModalOpen(true);
  };

  const handleCloseDeleteConfirmModal = () => {
    setIsDeleteConfirmModalOpen(false);
  };

  const handleCloseIsSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate('/', { replace: true });
  };

  const handleOpenIsSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const handleDeleteGathering = () => {
    setIsDeleteConfirmModalOpen(false);
    gatheringDelete(gatheringId, handleOpenIsSuccessModal);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isDeleteConfirmModalOpen}
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
      <Button variant='danger' onClick={handleOpenDeleteConfirmModal}>
        모임 삭제하기
      </Button>
    </>
  );
};

const LeaveGatheringButton = ({ gatheringId }: GatheringIdProps) => {
  const [isLeaveConfirmModalOpen, setIsLeaveConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const gatheringLeave = useGatheringLeave(gatheringId);
  const queryClient = useQueryClient();

  const handleOpenLeaveConfirmModal = () => {
    setIsLeaveConfirmModalOpen(true);
  };

  const handleCloseLeaveConfirmModal = () => {
    setIsLeaveConfirmModalOpen(false);
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

  const handleLeaveGatheringModal = async () => {
    setIsLeaveConfirmModalOpen(false);
    gatheringLeave(handleOpenIsSuccessModal);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isLeaveConfirmModalOpen}
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

const UnFixGatheringButton = ({ gatheringId }: GatheringIdProps) => {
  return (
    <Link to={`${GATHERINGS_UNFIX_PAGE_URL}/${gatheringId}`}>
      <Button variant='danger'>모임 확정 취소하기</Button>
    </Link>
  );
};

const FixGatheringButton = ({ gatheringId }: GatheringIdProps) => {
  return (
    <Link to={`${GATHERINGS_FIX_PAGE_URL}/${gatheringId}`}>
      <Button variant='primary'>모임 확정하기</Button>
    </Link>
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
        <EntranceGatheringButton gatheringId={gatheringId} isFix={isFix} />
      ) : isFix === '확정' ? (
        <UnFixGatheringButton gatheringId={gatheringId} />
      ) : isLeader ? (
        <>
          <FixGatheringButton gatheringId={gatheringId} />
          <DeleteGatheringButton gatheringId={gatheringId} />
        </>
      ) : (
        <LeaveGatheringButton gatheringId={gatheringId} />
      )}
    </div>
  );
};

export default GatheringButton;
