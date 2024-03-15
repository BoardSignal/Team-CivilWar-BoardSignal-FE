import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { ParticipantResponse } from '@/apis/gatheringDetail';
import Modal from '@/components/Modal';
import UserProfile from '@/components/UserProfile';
import {
  KICK_PARTICIPANT_MODAL_MESSAGE,
  SUCCESS_KICK_PARTICIPANT_MODAL_MESSAGE,
} from '@/constants/messages/modal';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';

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
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isPrimaryModalOpen, setIsPrimaryModalOpen] = useState(false);

  const kickParticipants = useKickParticipants(gatheringId);

  const handleOpenErrorModal = () => {
    setIsErrorModalOpen(true);
  };

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const handleDeleteErrorModal = (userId: string) => {
    setIsErrorModalOpen(false);
    kickParticipants(userId, handleOpenPrimaryModal);
  };

  const handleOpenPrimaryModal = () => {
    setIsPrimaryModalOpen(true);
  };

  const handleClosePrimaryModal = () => {
    setIsPrimaryModalOpen(false);
    navigate(`${GATHERINGS_PAGE_URL}/${gatheringId}`);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isErrorModalOpen}
        onClose={handleCloseErrorModal}
        onKick={handleDeleteErrorModal}
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
      <section className='flex h-full grow flex-col overflow-y-auto'>
        <ul>
          {participants.map(participant => (
            <li key={participant.userId}>
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
