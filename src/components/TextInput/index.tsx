import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const textInputCSS = cva(
  'w-full rounded-lg border border-gray-accent7 bg-transparent p-4 text-gray-accent1 placeholder-gray-accent4 outline-none',
  {
    variants: {
      variant: {
        default: 'focus:ring-2 focus:ring-gray-accent2',
        error: 'ring-2 ring-red-500',
      },
      isDisabled: {
        false: '',
        true: 'cursor-not-allowed bg-gray-accent7 placeholder-gray-accent3',
      },
    },
    defaultVariants: {
      variant: 'default',
      isDisabled: false,
    },
  },
);

type TextInputProps = ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof textInputCSS>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ variant, ...props }, ref) => {
    const { disabled: isDisabled } = props;

    return (
      <input
        ref={ref}
        className={cn(textInputCSS({ variant, isDisabled }))}
        {...props}
      />
    );
  },
);

export default TextInput;
