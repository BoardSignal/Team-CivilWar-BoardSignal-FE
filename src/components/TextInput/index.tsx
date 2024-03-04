import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/utils/cn';

const TextInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>(({ ...props }, ref) => {
  const { disabled: isDisabled } = props;

  return (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-lg border border-gray-accent7 p-4 text-gray-accent2 placeholder-gray-accent4 focus:outline-gray-accent2',
        isDisabled &&
          'cursor-not-allowed bg-gray-accent7 placeholder-gray-accent3',
      )}
      {...props}
    />
  );
});

export default TextInput;
