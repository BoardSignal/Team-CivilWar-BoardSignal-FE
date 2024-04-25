import { cn } from '@/utils/cn';

import Button from '../Button';

interface ChipButtonProps {
  optionItem: string;
  active: boolean;
  onClick: (selectedItem: string) => void;
}

const ChipButton = ({ optionItem, active, onClick }: ChipButtonProps) => {
  return (
    <Button
      className={cn(
        'flex w-fit items-center rounded-3xl border px-4 py-2 text-sm text-gray-accent3',
        active && 'border-primary text-primary',
      )}
      onClick={() => onClick(optionItem)}
    >
      {optionItem}
    </Button>
  );
};

export default ChipButton;
