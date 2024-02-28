import { useSearchParams } from 'react-router-dom';

import Icon from '@/components/Icon';
import { cn } from '@/utils/cn';

import type { Option } from '.';
import Button from '../Button';
import { IconName } from '../Icon/type';

interface OptionFilterButtonProps {
  option: Option;
  onClick?: () => void;
}

const OptionFilterButton = ({ option, onClick }: OptionFilterButtonProps) => {
  const { name, icon, queryStringKey } = option;

  const [searchParams] = useSearchParams();

  const getButtonText = () => {
    const selectedItemName = searchParams.get(queryStringKey);
    const selectedItems = searchParams.getAll(queryStringKey);

    if (selectedItemName) {
      return `${selectedItemName}${selectedItems.length > 1 ? ` 외 ${selectedItems.length - 1}개` : ''}`;
    }

    return name;
  };

  return (
    <Button
      className={cn(
        'h-fit w-fit gap-1 rounded-full border px-4 py-2 text-xs',
        searchParams.get(queryStringKey) && 'bg-gray-accent1 text-white',
      )}
      onClick={onClick}
    >
      <Icon
        id={
          searchParams.get(queryStringKey)
            ? (`${icon}-fill` as IconName)
            : (`${icon}-line` as IconName)
        }
        size={16}
        className={
          searchParams.get(queryStringKey) ? 'text-white' : 'text-gray-accent2'
        }
      />
      <span>{getButtonText()}</span>
    </Button>
  );
};

export default OptionFilterButton;
