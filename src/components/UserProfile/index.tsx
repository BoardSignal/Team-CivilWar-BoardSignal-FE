import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ParticipantResponse } from '@/apis/gatheringDetail';
import defaultProfileImage from '@/assets/default-profile-image.png';
import {
  KICK_PARTICIPANT_MODAL_MESSAGE,
  SUCCESS_KICK_PARTICIPANT_MODAL_MESSAGE,
} from '@/constants/messages/modal';
import { GATHERINGS_PAGE_URL, USERS_PAGE_URL } from '@/constants/pageRoutes';
import { GATHERING_DETAIL_QUERY_KEY } from '@/constants/queryKey';
import { useKickParticipant } from '@/pages/GatheringDetail/hooks/useKickParticipant';

import Button from '../Button';
import Icon from '../Icon';
import Modal from '../Modal';
import UserSignalTemperature from './UserSignalTemperature';

export interface UserProfileProps {
  userProfile: ParticipantResponse;
  isLeader?: boolean;
}

const UserProfile = ({
  userProfile,
  isLeader: isLoggedInLeader,
}: UserProfileProps) => {
  const {
    nickname,
    profileImageUrl,
    ageGroup,
    signalTemperature,
    isLeader: isParticipantLeader,
    userId,
  } = userProfile;

  const { gatheringId } = useParams() as { gatheringId: string };
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const [isKickConfirmModal, setIsKickConfirmModalOpen] = useState(false);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);

  const kickParticipant = useKickParticipant(Number(gatheringId));

  const handleOpenConfirmModal = () => {
    setIsKickConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setIsKickConfirmModalOpen(false);
  };

  const handleKick = (userId: number) => {
    setIsKickConfirmModalOpen(false);
    kickParticipant(userId, handleOpenPrimaryModal);
  };

  const handleOpenPrimaryModal = () => {
    setIsCheckModalOpen(true);
  };

  const handleClosePrimaryModal = () => {
    setIsCheckModalOpen(false);
    queryClient.invalidateQueries({
      queryKey: [GATHERING_DETAIL_QUERY_KEY, gatheringId],
    });
    navigate(`${GATHERINGS_PAGE_URL}/${gatheringId}/0`, { replace: true });
  };

  const handleKickParticipant = () => {
    handleKick(userId);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isKickConfirmModal}
        onClose={handleCloseConfirmModal}
        onDelete={handleKickParticipant}
        title='안내'
        buttonChildren='확인'
      >
        {KICK_PARTICIPANT_MODAL_MESSAGE}
      </Modal>
      <Modal
        variant='primary'
        isOpen={isCheckModalOpen}
        onClose={handleClosePrimaryModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_KICK_PARTICIPANT_MODAL_MESSAGE}
      </Modal>
      <div className='flex items-center justify-between border-b border-gray-accent7 p-4'>
        <div className='flex w-fit gap-2'>
          <Link to={`${USERS_PAGE_URL}/${userId}`}>
            <img
              src={profileImageUrl ?? defaultProfileImage}
              alt='프로필사진'
              className='size-10 rounded-full object-cover'
            />
          </Link>
          <div className='flex flex-col'>
            <span className='flex gap-2 text-sm font-bold text-gray-accent1'>
              {nickname}
              {isParticipantLeader && (
                <Icon id='vip-crown-fill' size={20} className='text-primary' />
              )}
            </span>
            <span className='text-xs text-gray-accent2'>{ageGroup}</span>
          </div>
          {isLoggedInLeader && !isParticipantLeader && (
            <Button
              variant='danger'
              className='w-fit p-4'
              onClick={handleOpenConfirmModal}
            >
              강퇴
            </Button>
          )}
        </div>

        <UserSignalTemperature temperature={signalTemperature} />
      </div>
    </>
  );
};

export default UserProfile;
