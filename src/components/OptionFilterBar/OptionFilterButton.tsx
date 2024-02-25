import { useSearchParams } from 'react-router-dom';

import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/type';
import { cn } from '@/utils/cn';

import type { Option } from '.';
import Button from '../Button';

interface OptionFilterButtonProps {
  option: Option;
  onClick?: () => void;
}

const OptionFilterButton = ({ option, onClick }: OptionFilterButtonProps) => {
  const { name, icons, queryStringKey } = option;

  const [searchParams] = useSearchParams();

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
            ? (icons.fill as IconName)
            : (icons.line as IconName)
        }
        size={16}
        className={
          searchParams.get(queryStringKey) ? 'fill-white' : 'fill-gray-accent2'
        }
      />
      <span>
        {searchParams.get(queryStringKey)
          ? `${searchParams.get(queryStringKey)}${searchParams.getAll(queryStringKey).length > 1 ? ` 외 ${searchParams.getAll(queryStringKey).length - 1}개` : ''}`
          : name}
      </span>
    </Button>
  );
};

export default OptionFilterButton;
