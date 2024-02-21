import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

const inputCSS =
  'w-full rounded-lg border border-gray-accent7 p-4 text-gray-accent2 placeholder-gray-accent4 focus:outline-gray-accent2';

interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
  variant?: 'disabled' | 'default';
}

const TextInput = ({ variant = 'default', ...props }: TextInputProps) => {
  return (
    <input
      className={cn(
        inputCSS,
        variant === 'disabled' &&
          'cursor-not-allowed bg-gray-accent7 placeholder-gray-accent3',
      )}
      {...props}
    />
  );
};

export default TextInput;
