import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { ParticipantResponse } from '@/apis/gatheringDetail';
import Modal from '@/components/Modal';
import UserProfile from '@/components/UserProfile';
import {
  KICK_PARTICIPANT_MODAL_MESSAGE,
  SUCCESS_KICK_PARTICIPANT_MODAL_MESSAGE,
} from '@/constants/messages/modal';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import { GATHERING_DETAIL_QUERY_KEY } from '@/constants/queryKey';

import { useKickParticipant } from '../../hooks/useKickParticipant';

interface GatheringParticipantsProps {
  participants: ParticipantResponse[];
  isLeader: boolean;
}

const GatheringParticipants = ({
  participants,
  isLeader,
}: GatheringParticipantsProps) => {
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
    navigate(`${GATHERINGS_PAGE_URL}/${gatheringId}`);
  };

  return (
    <>
      <section className='flex h-full grow flex-col overflow-y-auto overflow-x-hidden'>
        <ul>
          {participants.map(participant => {
            const handleKickParticipant = () => handleKick(participant.userId);

            return (
              <li
                key={participant.userId}
                className='border-b border-gray-accent7'
              >
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
                <UserProfile
                  userProfile={participant}
                  isLeader={isLeader}
                  onClick={handleOpenConfirmModal}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default GatheringParticipants;
