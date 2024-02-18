import { cn } from '@/utils/cn';

interface SelectableChipsProps {
  items: string[];
  selectedItems: string[];
  onClick: (item: string) => void;
}

const SelectableChips = ({
  items,
  selectedItems,
  onClick,
}: SelectableChipsProps) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {items.map(item => (
        <button
          key={item}
          className={cn(
            'flex w-fit items-center rounded-3xl border px-4 py-2 text-sm text-gray-accent3',
            selectedItems.includes(item) && 'border-primary text-primary',
          )}
          onClick={() => onClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SelectableChips;
