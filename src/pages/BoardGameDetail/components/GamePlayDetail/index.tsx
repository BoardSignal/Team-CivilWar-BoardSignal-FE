const Description = ({ title, value }: { title: string; value: string }) => (
  <span className='flex items-center gap-0.5'>
    <span className='font-bold'>{title}</span>
    <span className='text-gray-accent2'>{value}</span>
  </span>
);

interface GamePlayDetailProps {
  difficulty: string;
  minParticipants: number;
  maxParticipants: number;
  fromPlayTime: number;
  toPlayTime: number;
}

const GamePlayDetail = ({
  difficulty,
  minParticipants,
  maxParticipants,
  fromPlayTime,
  toPlayTime,
}: GamePlayDetailProps) => {
  return (
    <span className='flex gap-1 text-xs text-gray-accent1'>
      <Description title='난이도' value={difficulty} />
      <Description
        title='인원'
        value={`${minParticipants}-${maxParticipants}`}
      />
      <Description
        title='소요시간'
        value={`${fromPlayTime}분-${toPlayTime}분`}
      />
    </span>
  );
};

export default GamePlayDetail;
