import { cn } from '@/utils/cn';

import Button from '../Button';

interface OptionItemButtonProps {
  optionItem: string;
  active: boolean;
  onClick: (selectedItem: string) => void;
}

const OptionItemButton = ({
  optionItem,
  active,
  onClick,
}: OptionItemButtonProps) => {
  return (
    <Button
      type='button'
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

export default OptionItemButton;
