import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/utils/cn';

import Icon from '../Icon';

const Checkbox = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>(({ children, name, ...props }, ref) => {
  return (
    <div className='relative flex items-center gap-2'>
      <input
        ref={ref}
        name={name}
        type='checkbox'
        id={name}
        className='peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-accent7'
        {...props}
      />
      <label
        htmlFor={name}
        className={cn('text-gray-accent2', name && 'cursor-pointer')}
      >
        {children}
      </label>
      <Icon
        id='check-line'
        className='pointer-events-none absolute hidden w-5 text-primary peer-checked:block'
      />
    </div>
  );
});

export default Checkbox;
