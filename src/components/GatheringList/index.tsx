import GatheringItem from './GatheringItem';

export interface Gathering {
  id: number;
  imageUrl: string;
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
    <section className='grow overflow-y-auto overscroll-contain'>
      <ul>
        {gatherings.map(gathering => (
          <GatheringItem key={gathering.id} gathering={gathering} />
        ))}
      </ul>
    </section>
  );
};

export default GatheringList;
