import UserProfile from '@/components/UserProfile';

export interface Participants {
  userId: number;
  profileImageUrl?: string;
  nickname: string;
  ageGroup: string;
  isLeader: boolean;
  signalTemperature: number;
}

interface GatheringParticipantsProps {
  participants: Participants[];
}

const GatheringParticipants = ({
  participants,
}: GatheringParticipantsProps) => {
  return (
    <section className='grow overflow-y-auto'>
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
