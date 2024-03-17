import GatheringDescription from '../GatheringDescription';
import GatheringGuide from '../GatheringGuide';

interface GatheringIntroduce {
  roomId: number;
  title: string;
  description: string;
  time: string;
  startTime: string | null;
  subwayLine: string;
  subwayStation: string;
  place: string | null;
  minAge: number;
  maxAge: number;
  minParticipants: number;
  maxParticipants: number;
  imageUrl: string | null;
  allowedGender: string;
  categories: string[];
  createdAt: string;
}

interface GatheringIntroduceProps {
  gatheringIntroduce: GatheringIntroduce;
}

const DEFAULT_IMAGE_URL = 'https://via.placeholder.com/300';

const GatheringIntroduce = ({
  gatheringIntroduce,
}: GatheringIntroduceProps) => {
  const { title, description, createdAt, imageUrl, ...gatheringGuide } =
    gatheringIntroduce;

  return (
    <div className='flex h-full grow flex-col overflow-y-auto'>
      <img
        src={imageUrl ?? DEFAULT_IMAGE_URL}
        alt='모임 이미지'
        className='w-full object-cover'
      />
      <div className='flex flex-col gap-4 px-4 py-6'>
        <GatheringDescription
          title={title}
          description={description}
          createdAt={createdAt}
        />
        <GatheringGuide gatheringGuide={gatheringGuide} />
      </div>
    </div>
  );
};

export default GatheringIntroduce;
