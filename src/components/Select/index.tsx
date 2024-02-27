import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react';

import { cn } from '@/utils/cn';

import Icon from '../Icon';

interface SelectProps
  extends Omit<ComponentPropsWithoutRef<'select'>, 'onChange'> {
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

const Select = ({ options, placeholder, onChange, ...props }: SelectProps) => {
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  const handleChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);

    if (!isPlaceholder) return;

    setIsPlaceholder(false);
  };

  return (
    <div className='relative w-full rounded-lg border border-gray-accent7'>
      <select
        className={cn(
          '[::-ms-expand]:hidden relative z-10 w-full cursor-pointer appearance-none rounded-lg border-0 bg-transparent p-4 outline-gray-accent2',
          isPlaceholder ? 'text-gray-accent4' : 'text-gray-accent1',
        )}
        onChange={handleChangeValue}
        {...props}
      >
        <option value={placeholder} disabled hidden>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option} value={option} className='text-gray-accent1'>
            {option}
          </option>
        ))}
      </select>
      <span className='absolute right-0 top-0 flex h-full items-center justify-center pr-4 text-gray-accent4'>
        <Icon id='arrow-bottom-line' size={24} />
      </span>
    </div>
  );
};

export default Select;
