import { ParticipantResponse } from '@/apis/gatheringDetail';
import UserProfile from '@/components/UserProfile';

interface GatheringParticipantsProps {
  participants: ParticipantResponse[];
  isLeader: boolean;
}

const GatheringParticipants = ({
  participants,
  isLeader,
}: GatheringParticipantsProps) => {
  return (
    <>
      <section className='flex h-full grow flex-col overflow-y-auto overflow-x-hidden'>
        <ul>
          {participants.map(participant => {
            return (
              <li key={participant.userId}>
                <UserProfile userProfile={participant} isLeader={isLeader} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default GatheringParticipants;
