import GatheringListItem from './GatheringListItem';

export interface Gathering {
  id: number;
  imageUrl: string | null;
  title: string;
  description: string;
  station: string;
  time: string;
  minAge: number;
  maxAge: number;
  allowedGender: string;
  minParticipants: number;
  maxParticipants: number;
  categories: string[];
  headCount: number;
  createdAt: string;
}

interface GatheringListProps {
  gatherings: Gathering[];
}

const GatheringList = ({ gatherings }: GatheringListProps) => {
  return (
    <section className='grow overflow-y-auto'>
      <ul>
        {gatherings.map(gathering => (
          <GatheringListItem key={gathering.id} gathering={gathering} />
        ))}
      </ul>
    </section>
  );
};

export default GatheringList;
