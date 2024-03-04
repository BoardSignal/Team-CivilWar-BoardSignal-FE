import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useState,
} from 'react';

import { cn } from '@/utils/cn';

import Icon from '../Icon';

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  options: string[];
  placeholder: string;
}

/**
 * Select 컴포넌트는 필수로 값을 전달해야 하며,
 * option을 선택한 뒤에는 취소할 수 없습니다.
 *
 * value 초깃값은 빈 string('')만 가능합니다.
 */

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, placeholder, onChange, ...props }, ref) => {
    const [isShowingPlaceholder, setIsShowingPlaceholder] = useState(true);

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange && onChange(e);

      if (isShowingPlaceholder) {
        setIsShowingPlaceholder(false);
      }
    };

    return (
      <div className='relative'>
        <select
          {...props}
          ref={ref}
          className={cn(
            'relative z-10 w-full cursor-pointer appearance-none rounded-lg border bg-transparent p-4 outline-gray-accent2',
            isShowingPlaceholder ? 'text-gray-accent4' : 'text-gray-accent1',
          )}
          onChange={handleChangeSelect}
        >
          <option value='' disabled hidden>
            {placeholder}
          </option>
          {options.map(option => (
            <option key={option} value={option} className='text-gray-accent1'>
              {option}
            </option>
          ))}
        </select>
        <span className='absolute right-4 top-4'>
          <Icon
            id='arrow-bottom-line'
            size={24}
            className='text-gray-accent4'
          />
        </span>
      </div>
    );
  },
);

export default Select;
