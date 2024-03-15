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

import { useKickParticipants } from '../../hooks/useKickParticipants';

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
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isPrimaryModalOpen, setIsPrimaryModalOpen] = useState(false);

  const kickParticipants = useKickParticipants(Number(gatheringId));

  const handleOpenErrorModal = () => {
    setIsErrorModalOpen(true);
  };

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const handleKickErrorModal = (userId: number) => {
    setIsErrorModalOpen(false);
    kickParticipants(userId, handleOpenPrimaryModal);
  };

  const handleOpenPrimaryModal = () => {
    setIsPrimaryModalOpen(true);
  };

  const handleClosePrimaryModal = () => {
    setIsPrimaryModalOpen(false);
    queryClient.invalidateQueries({
      queryKey: [GATHERING_DETAIL_QUERY_KEY, gatheringId],
    });
    navigate(`${GATHERINGS_PAGE_URL}/${gatheringId}`);
  };

  return (
    <>
      <section className='flex h-full grow flex-col overflow-y-auto'>
        <ul>
          {participants.map(participant => (
            <li key={participant.userId}>
              <Modal
                variant='danger'
                isOpen={isErrorModalOpen}
                onClose={handleCloseErrorModal}
                onDelete={() => handleKickErrorModal(participant.userId)}
                title='안내'
                buttonChildren='확인'
              >
                {KICK_PARTICIPANT_MODAL_MESSAGE}
              </Modal>
              <Modal
                variant='primary'
                isOpen={isPrimaryModalOpen}
                onClose={handleClosePrimaryModal}
                title='안내'
                buttonChildren='확인'
              >
                {SUCCESS_KICK_PARTICIPANT_MODAL_MESSAGE}
              </Modal>
              <UserProfile
                userProfile={participant}
                isLeader={isLeader}
                onClick={handleOpenErrorModal}
              />
              <div className='border-b border-gray-accent7'></div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default GatheringParticipants;
