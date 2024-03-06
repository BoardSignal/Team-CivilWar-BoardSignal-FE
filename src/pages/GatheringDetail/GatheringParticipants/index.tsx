import UserProfile from '@/components/UserProfile';

export interface Participants {
  userId: number;
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
          <UserProfile
            key={participant.userId}
            nickname={participant.nickname}
            ageGroup={participant.ageGroup}
            signalTemperature={participant.signalTemperature}
            isLeader={participant.isLeader}
          />
        ))}
      </ul>
    </section>
  );
};

export default GatheringParticipants;
