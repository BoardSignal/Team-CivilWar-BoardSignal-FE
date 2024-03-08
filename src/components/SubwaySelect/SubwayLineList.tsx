import { cn } from '@/utils/cn';

import Button from '../Button';

interface SubwayLineListProps {
  onSelect: (value: string) => void;
  lines: { name: string; color: string }[];
  selectedLine: string;
}

const SubwayLineList = ({
  onSelect,
  lines,
  selectedLine,
}: SubwayLineListProps) => {
  return (
    <div className='scroll-none h-full overflow-y-auto border-r border-gray-accent7'>
      {lines.map(({ name, color }) => (
        <Button
          key={name}
          className={cn(
            'flex h-fit w-32 flex-col items-start gap-1 rounded-none border-b border-gray-accent7 px-4 py-2',
            name === selectedLine && 'bg-primary-lighter',
          )}
          onClick={() => onSelect(name)}
        >
          <div
            className='rounded-full px-2 py-1 text-sm text-white'
            style={{ backgroundColor: color }}
          >
            {name}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default SubwayLineList;
