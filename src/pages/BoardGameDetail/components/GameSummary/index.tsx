import Chip from '@/components/Chip';

interface GameSummaryProps {
  name: string;
  categories: string[];
}

const GameSummary = ({ name, categories }: GameSummaryProps) => {
  return (
    <>
      <div className='flex w-full flex-col items-center gap-3 border-b border-gray-accent7 py-5'>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-lg font-bold text-gray-accent1'>{name}</span>
          <div className='flex flex-wrap gap-1'>
            {categories.map(category => (
              <Chip key={category} size='small'>
                {category}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameSummary;
