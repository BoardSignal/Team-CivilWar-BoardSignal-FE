const Description = ({ title, value }: { title: string; value: string }) => (
  <span className='flex items-center gap-0.5'>
    <span className='font-bold'>{title}</span>
    <span className='text-gray-accent2'>{value}</span>
  </span>
);

interface GamePlayDetail {
  difficulty: string;
  minParticipants: number;
  maxParticipants: number;
  fromPlayTime: number;
  toPlayTime: number;
}

interface GamePlayDetailProps {
  gamePlayDetail: GamePlayDetail;
}

const GamePlayDetail = ({ gamePlayDetail }: GamePlayDetailProps) => {
  const {
    difficulty,
    minParticipants,
    maxParticipants,
    fromPlayTime,
    toPlayTime,
  } = gamePlayDetail;

  const participantsRange = `${minParticipants}-${maxParticipants}`;
  const playTimeRange = `${fromPlayTime}분-${toPlayTime}분`;

  return (
    <span className='flex gap-1 text-xs text-gray-accent1'>
      <Description title='난이도' value={difficulty} />
      <Description title='인원' value={participantsRange} />
      <Description title='소요시간' value={playTimeRange} />
    </span>
  );
};

export default GamePlayDetail;
