import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Icon from '@/components/Icon';

const Agreement = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>(({ children, name, ...props }, ref) => {
  return (
    <div>
      <div className='relative flex items-center gap-2 py-2'>
        <input
          type='checkbox'
          name={name}
          id={name}
          className='peer size-5 appearance-none'
          {...props}
          ref={ref}
        />
        <label
          htmlFor={name}
          className='flex cursor-pointer items-center text-gray-accent2'
        >
          {children}
        </label>
        <Icon
          id='check-line'
          className='pointer-events-none absolute w-[20px] text-gray-accent2 peer-checked:text-primary'
        />
      </div>
    </div>
  );
});

export default Agreement;
