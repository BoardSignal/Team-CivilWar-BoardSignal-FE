import { ParticipantResponse } from '@/apis/gatheringDetail';
import UserProfile from '@/components/UserProfile';

interface GatheringParticipantsProps {
  participants: ParticipantResponse[];
}

const GatheringParticipants = ({
  participants,
}: GatheringParticipantsProps) => {
  return (
    <section className='flex h-full grow flex-col overflow-y-auto'>
      <ul>
        {participants.map(participant => (
          <li key={participant.userId}>
            <UserProfile userProfile={participant} />
            <div className='border-b border-gray-accent7'></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GatheringParticipants;
